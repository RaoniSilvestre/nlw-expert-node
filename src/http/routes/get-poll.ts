import { FastifyInstance } from "fastify"
import { prisma } from "./../../lib/prisma"
import { z } from 'zod'
import { redis } from "../../lib/redis"


export async function getPoll(app:FastifyInstance){

  

  app.get('/polls/:pollId', async (req, res)=> {
    
    const getPollParams = z.object({
      pollId: z.string().uuid()
    })

    const { pollId } = getPollParams.parse(req.params)

    const polls = await prisma.poll.findUnique({
      where: {
        id: pollId
      },
      include: {
        options: { select: {
          id: true,
          title: true
        }}
      }
    })
    
    if(!polls){
      return res.status(400).send({message: "Poll not found"})
    }

    const result = await redis.zrange(pollId, 0, -1, 'WITHSCORES')

    const votes = result.reduce((obj, line, index ) => {
      if(index %2 == 0){
        const score = result[index+1]
        Object.assign(obj, {[line]: Number(score)}) 
      }
      return obj
    }, {} as Record<string, number>)

    console.log(votes)
    return res.send({ poll: {
      id: polls.id,
      title: polls.title,
      options: polls.options.map(option => {
        return {
          id: option.id,
          title: option.title,
          score: (option.id in votes) ? votes[option.id] : 0,
        }
      })
    }})
  })

}