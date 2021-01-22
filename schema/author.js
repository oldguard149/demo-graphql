const { GraphQLObjectType, GraphQLInt, GraphQLString, } = require('graphql');

const Author = new GraphQLObjectType({
    name: 'author',
    fields: () => ({
        author_id: { type: GraphQLInt },
        fullname: { type: GraphQLString }
    })
})

module.exports = {
    Author
}