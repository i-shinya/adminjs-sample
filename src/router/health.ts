import { FastifyInstance } from 'fastify'

export const healthRoutes = async (server: FastifyInstance) => {
  server.get(
    '',
    {
      schema: {
        description: 'ヘルスチェックAPI',
        tags: ['health'],
      }, // swagger用の定義 書き方は[github](https://github.com/fastify/fastify-swagger-ui)
    },
    async (request, reply) => {
      reply.status(200).send({ status: 'ok' })
    },
  )
}
