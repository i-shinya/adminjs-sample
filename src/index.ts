import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastify from 'fastify'

const server = fastify()

// swaggerの設定
server.register(fastifySwagger);
server.register(fastifySwaggerUi);

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
  console.log(`swagger ui http://localhost:8080/documentation/static/index.html`)
})
