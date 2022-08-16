const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema');

app.use(express.static('static'));
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
