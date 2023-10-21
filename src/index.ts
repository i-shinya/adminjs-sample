import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import { healthRoutes } from './router/health.js'
import AdminJSFastify from '@adminjs/fastify'
import { PrismaClient } from '@prisma/client'
import { newAdminJS } from './adminjs.js'

const prisma = new PrismaClient()

const start = async () => {
  const server = fastify()

  // adminjsの設定
  const admin = newAdminJS(prisma)
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
