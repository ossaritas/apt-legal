import { Resolvers } from './generated/generated-types';
import { APP_SECRET } from './auth';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { GraphQLContext } from '../src/context/context';
import { Link, User } from '@prisma/client';

import { useQuery } from 'urql';

const resolvers = {
  User: {
    // ... other User object type field resolver functions ...
    links: (parent: User, args: {}, context: GraphQLContext) =>
      context.prisma.user.findUnique({ where: { id: parent.id } }).links(),
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
    postedBy(parent: Link, args: {}, context: GraphQLContext) {
      if (!parent.postedById) {
        return null;
      }

      return context.prisma.link
        .findUnique({ where: { id: parent.id } })
        .postedBy();
    },
  },
  Query: {
    // ... other Query Object Type field resolver functions ...
    me(parent: unknown, args: {}, context: GraphQLContext) {
      if (context.currentUser === null) {
        throw new Error('Unauthenticated!');
      }

      return context.currentUser;
    },
  },
  // ... other resolver maps ...
  Mutation: {
    async post(
      parent: unknown,
      args: { url: string; description: string },
      context: GraphQLContext
    ) {
      if (context.currentUser === null) {
        throw new Error('Unauthenticated!');
      }

      const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
          postedBy: { connect: { id: context.currentUser.id } },
        },
      });

      return newLink;
    },
    // ... other Mutation field resolvers ...
    async signup(
      parent: unknown,
      args: { email: string; password: string; name: string },
      context: GraphQLContext
    ) {
      // 1
      const password = await hash(args.password, 10);

      // 2
      const user = await context.prisma.user.create({
        data: { ...args, password },
      });

      // 3
      const token = sign({ userId: user.id }, APP_SECRET);

      // 4
      return { token, user };
    },
    async login(
      parent: unknown,
      args: { email: string; password: string },
      context: GraphQLContext
    ) {
      console.log('---> 🚀 (context.currentUser:', context.currentUser);

      // 1
      const user = await context.prisma.user.findUnique({
        where: { email: args.email },
      });
      if (!user) {
        throw new Error('No such user found');
      }

      // 2
      const valid = await compare(args.password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }

      const token = sign({ userId: user.id }, APP_SECRET);

      // 3
      return { token, user };
    },
  },
};

export default resolvers;
