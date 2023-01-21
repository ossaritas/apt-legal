import { QueryResolvers } from '../generated/generated-types';
import { TwitterResolverContext } from '../resolvers';

const queryTwitterResolver: QueryResolvers<TwitterResolverContext> = {
  currentUser: () => {
    return {
      name: 's',
      avatarUrl: 'a',
      coverUrl: 'a',
      createdAt: 'a',
      updatedAt: '2231',
      handle: 'a',
      id: '2',
    };
  },
};

export default queryTwitterResolver;
