var dataStore = require("../dataStore.js");
var _ = require("lodash");

const userInfoResolver = ({id}) => {
    var users = dataStore.getData("users");
    var user = _.find(users, (u) => u.id === id);
    return user;
}

module.exports = userInfoResolver;