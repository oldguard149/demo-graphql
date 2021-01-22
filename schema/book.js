const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Q = require('../database/query');
const { query, findOne } = require('../database/helper');
const { Publisher } = require('./publisher');
const { Genre } = require('./genre');
const { Author } = require('./author');

const Book = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    isbn: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    genre_id: { type: GraphQLInt },
    publisher_id: { type: GraphQLInt },
    genre: {
      type: Genre,
      resolve: async (parent) => { return await findOne(Q.genre.genreById, parent.genre_id) }
    },
    publisher: {
      type: Publisher,
      resolve: async (parent) => { return await findOne(Q.publisher.publisherById, [parent.publisher_id]) }
    },
    author: {
      type: new GraphQLList(Author),
      resolve: async (parent) => { return await query(Q.author.authorsWrittenIsbn, [parent.isbn]) }
    }
  })
});

const bookResolver = {
  book: {
    type: Book,
    args: {
      isbn: { type: GraphQLString }
    },
    resolve: async (parent, args) => {
      return await findOne(Q.book.book, [args.isbn]);
    }
  }
}

module.exports = {
  Book,
  bookResolver
}