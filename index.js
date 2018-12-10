const express = require("express");
const expressGraphQl = require("express-graphql");
const graphQl = require("graphql");
const DataStore = require("./dataStore");
// Import Resolvers;
const resolvers = require("./Resolvers");

const mergeObjects = (obj1, obj2) =>{
    var res = {};
    for(var key in obj1) {
        res[key] = obj1[key];
    }
    for (var key in obj2) {
        res[key] = obj2[key];
    }
    return res;
}

var schema = graphQl.buildSchema(`
    type UserInfo {
        id: Int,
        name: String,
        address: String,
        phoneNos: [String]
    }
    type Mutation {
        updateAbout(message: String): String,
        addUser(id: Int!, name: String!, address: String!, phoneNos: [String]): UserInfo
    }
    type Query {
        about: String,
        userInfo(id: Int!): UserInfo,
        users: [UserInfo]
    }
`
);

var app = express();

app.use("/graphql", expressGraphQl({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(4040, ()=> {
    console.log("App running on port : 4040");
});