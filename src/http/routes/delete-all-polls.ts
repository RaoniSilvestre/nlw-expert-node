import { FastifyInstance } from "fastify"
import { prisma } from "./../../lib/prisma"
import { z } from 'zod'


export async function deletePolls(app: FastifyInstance) {

  app.delete('/polls/d', async (req, res) => {
    
    await prisma.vote.deleteMany()
    await prisma.pollOption.deleteMany()
    await prisma.poll.deleteMany()
    
    return "deleted"
  })

}