import fastify from 'fastify'

const app = fastify()

app.get('/', ()=>{
  return "Hello NLW"
})

app.post('/polls', (req)=>{
  console.log(req)
  return "sexooo"
})


app.listen({ port: 3333}).then(() => {
  console.log("HTTP server running!")
})



