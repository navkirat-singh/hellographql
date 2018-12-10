const dataStore = require("../dataStore.js");

const UsersResolver = () => {
    var users = dataStore.getData("users");
    return users;
}

module.exports = UsersResolver;