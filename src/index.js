import express from "express";
import config from 'config';
import expressGraphQL from "express-graphql";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';

const PORT = process.env.PORT || config.get('port');

const app = express();

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

if (process.env.NODE_ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}

app.use('/', (_, res) => {
  res.send('hello express');
});

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});