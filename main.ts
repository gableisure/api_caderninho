import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const planos = await prisma.tb_forma_pagamento.findMany({})
    console.log(planos)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })