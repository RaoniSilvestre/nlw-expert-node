import { FastifyInstance } from "fastify"
import { prisma } from "./../../lib/prisma"
import { z } from 'zod'


export async function createPoll(app: FastifyInstance){

  app.post('/polls',async (req, res)=>{

    const createPollBody = z.object({
      title: z.string(),
      options: z.array(z.string())
    })
  
    const { title, options } = createPollBody.parse(req.body)
  
    const poll = await prisma.poll.create({
      data: {
        title,
      }
    })

    await prisma.pollOption.createMany({
      data: options.map(option => {
        return { title: option, pollId: poll.id }
      })
    })
  
    console.log(title)
    return res.status(201).send({"Poll ID": poll.id})
  })

}