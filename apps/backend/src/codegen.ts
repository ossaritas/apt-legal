import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    'apps/backend/src/generated/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      overwrite: true,
    },
  },
};
export default config;
