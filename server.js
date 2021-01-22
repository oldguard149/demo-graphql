const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// Construct a schema, using GraphQL schema language
const schema = require('./schema');

const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000);
console.log('Running a GraphQL API server at http://localhost:4000');