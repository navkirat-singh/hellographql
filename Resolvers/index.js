const HelloResolver = require("./HelloGraphQlResolver.js");
const UserInfoResolver = require("./UserInfoResolver");
const UpdateAboutMutation = require("./Mutations/UpdateAboutMutation.js");
const AddUserMutation = require("./Mutations/AddUserMutation.js");
const UsersResolver = require("./UsersResolver");

var resolvers = {
    about: HelloResolver,
    updateAbout: UpdateAboutMutation,
    userInfo: UserInfoResolver,
    users: UsersResolver,
    addUser: AddUserMutation
}

module.exports = resolvers;