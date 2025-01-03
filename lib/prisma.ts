import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// 開発環境ではglobalThis.prismaGlobalの中にprismaインスタンスを格納。
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
