import { Resolvers } from './generated/generated-types';
import queryTwitterResolver from './resolvers/Query';

export interface TwitterResolverContext {
  db;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolver,
};

export default resolvers;
