import { createYoga, createSchema } from 'graphql-yoga';
import * as fs from 'fs';
import resolvers from './resolvers';

const schema = createSchema({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
});

export const yoga = createYoga({ schema });
