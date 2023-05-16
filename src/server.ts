/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3030,
  })
  .then(() => {
    console.log('🚀running on port http://localhost:3030')
  })
