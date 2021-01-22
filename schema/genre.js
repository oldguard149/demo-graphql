const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Q = require('../database/query');
const { query, findOne } = require('../database/helper');

const Genre = new GraphQLObjectType({
    name: 'genre',
    description: 'Book genre',
    fields: () => ({
        genre_id: { type: GraphQLInt },
        name: { type: GraphQLString },
    })
});

const genreResolver = {
    genres: {
        type: GraphQLList(Genre),
        resolve: async () => { return await query(Q.genre.genres) }
    },
    genre: {
        type: Genre,
        args: {
            id: { type: GraphQLInt }
        },
        resolve: async (parent, args) => { return await findOne(Q.genre.genreById, [args.id]) }
    }
}

module.exports = {
    Genre,
    genreResolver
}