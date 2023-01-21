import * as express from 'express';
import * as path from 'path';
import { yoga } from './yoga-server';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/graphql', yoga);

const port = process.env.port || 4000;
const server = app.listen(port, () => {
  console.log(`GraphQL API located at http://localhost:${port}/graphql`);
});
server.on('error', console.error);
