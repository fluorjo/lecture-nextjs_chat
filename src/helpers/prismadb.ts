import { PrismaClient } from "@prisma/client"

declare global {
  // client를 prisma에 할당하기 전에는 undefined.
  var prisma: PrismaClient | undefined
}
//                                  없으면 새로 만든다.
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client

