import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import { healthRoutes } from './router/health.js'
import AdminJS from 'adminjs'
import AdminJSFastify from '@adminjs/fastify'

const start = async () => {
  const server = fastify()
  const admin = new AdminJS({
    databases: [],
    rootPath: '/admin',
  })

  await AdminJSFastify.buildRouter(admin, server)

  // swaggerの設定
  server.register(fastifySwagger)
  server.register(fastifySwaggerUi)

  // router
  server.register(healthRoutes, {
    prefix: '/health',
  })

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
    console.log(
      `swagger ui http://localhost:8080/documentation/static/index.html`,
    )
  })
}

start()
