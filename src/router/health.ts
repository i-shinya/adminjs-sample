import { FastifyInstance } from 'fastify'

export const healthRoutes = async (server: FastifyInstance) => {
  server.get(
    '',
    {
      schema: {
        description: 'ヘルスチェックAPI',
        tags: ['health'],
      }, // swagger用の定義
    },
    async (request, reply) => {
      reply.status(200).send({ status: 'ok' })
    },
  )
}
