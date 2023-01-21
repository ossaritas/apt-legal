import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: ['apps/frontend/**/*.tsx'],
  watch: true,
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'libs/data-access/src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
