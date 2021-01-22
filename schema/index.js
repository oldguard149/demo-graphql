const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { genreResolver } = require('./genre');
const { publisherResolver } = require('./publisher');
const { bookResolver } = require('./book');


const rootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    ...genreResolver,
    ...publisherResolver,
    ...bookResolver
  })
})


module.exports = new GraphQLSchema({
  query: rootQuery
});