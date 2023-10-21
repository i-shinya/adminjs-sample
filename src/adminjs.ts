import AdminJS, { ComponentLoader } from 'adminjs'
import * as AdminJSPrisma from '@adminjs/prisma'
import { PrismaClient } from '@prisma/client'

import importExportFeature from '@adminjs/import-export'

export const newAdminJS = (prisma: PrismaClient): AdminJS => {
  AdminJS.registerAdapter({
    Resource: AdminJSPrisma.Resource,
    Database: AdminJSPrisma.Database,
  })

  const componentLoader = new ComponentLoader()

  const adminOptions = {
    componentLoader,
    rootPath: '/admin',
    resources: [
      // ここでモデルを登録する
      {
        resource: {
          model: AdminJSPrisma.getModelByName('users'),
          client: prisma,
        },
        features: [importExportFeature({ componentLoader })],
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('authentication_providers'),
          client: prisma,
        },
        features: [importExportFeature({ componentLoader })],
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('chat_session'),
          client: prisma,
        },
        features: [importExportFeature({ componentLoader })],
        options: {},
      },
      {
        resource: {
          model: AdminJSPrisma.getModelByName('chat_history'),
          client: prisma,
        },
        features: [importExportFeature({ componentLoader })],
        options: {},
      },
    ],
  }
  return new AdminJS(adminOptions)
}
