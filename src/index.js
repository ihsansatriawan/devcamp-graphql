import express from "express";
import config from 'config';
import cors from "cors";

const PORT = process.env.PORT || config.get('port');

const app = express();

app.use('*', cors());

app.use('/', (_, res) => {
  res.send('hello express');
});

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});