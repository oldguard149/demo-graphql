const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Q = require('../database/query');
const { query, findOne } = require('../database/helper');

const Publisher = new GraphQLObjectType({
    name: 'publisher',
    fields: () => ({
        publisher_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

const getPublisher = () => ({
    publisher: {
        type: Publisher,
        args: {
            id: { type: GraphQLInt },
        },
        resolve: async (parent, args) => {
            return await findOne(Q.publisher.publisherById, [args.id]);
        }
    }
});

const getPublishers = () => ({
    publishers: {
        type: GraphQLList(Publisher),
        description: 'Publisher list, using along with pagination arguments option',
        args: {
            offset: {
                type: GraphQLInt,
                description: 'The begin postion where publishers will be return',
                defaultValue: 0
            },
            limit: {
                type: GraphQLInt,
                description: 'Number of publishers return',
                defaultValue: 10
            }
        },
        resolve: async (parent, args) => {
            return await query(Q.publisher.publishers, [args.offset, args.limit]);
        }
    }
})

const publisherResolver = {
    ...getPublisher(),
    ...getPublishers()
}

module.exports = {
    Publisher,
    publisherResolver
}