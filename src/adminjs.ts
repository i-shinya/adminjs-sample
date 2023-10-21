import AdminJS from 'adminjs'
import * as AdminJSPrisma from '@adminjs/prisma'
import { PrismaClient } from '@prisma/client'

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
})

export const newAdminJS = (prisma: PrismaClient): AdminJS => {
  const adminOptions = {
    rootPath: '/admin',
    resources: [
      // ここでモデルを登録する
      {
        resource: {
          model: AdminJSPrisma.getModelByName('users'),
          client: prisma,
        },
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('authentication_providers'),
          client: prisma,
        },
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('chat_session'),
          client: prisma,
        },
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('chat_history'),
          client: prisma,
        },
        options: {},
      },
    ],
  }
  return new AdminJS(adminOptions)
}
