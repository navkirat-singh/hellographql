const addUserMutation = require("./AddUserMutation.js");
const updateAboutMutation = require("./UpdateAboutMutation.js");

var mutations = {
    updateAbout: updateAboutMutation,
    addUser: addUserMutation
};

module.exports = mutations;