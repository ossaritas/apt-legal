import { PrismaClient, User } from '@prisma/client';
import { YogaInitialContext } from 'graphql-yoga';
import { authenticateUser } from 'apps/backend/src/auth';

const prisma = new PrismaClient();

export type GraphQLContext = {
  prisma: PrismaClient;
  currentUser: User | null;
};

export async function createContext(
  initialContext: YogaInitialContext
): Promise<GraphQLContext> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, initialContext.request),
  };
}
