import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { deletePolls } from './routes/delete-all-polls'

const app = fastify()

app.register(cookie, {
  secret: "FUQWEIFOUHQWEFIUQWFHIOQUWEFHFIUfiquefhiueqwfhiu",
  hook: "onRequest",
  parseOptions: {}
})

app.register(createPoll)

app.register(getPoll)

app.register(voteOnPoll)

app.register(deletePolls)


app.listen({ port: 3333}).then(() => {
  console.log("HTTP server running on port 3333!")
})



