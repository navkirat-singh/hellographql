var dataStore = require("../dataStore.js");

const helloGraphQlResolver = () => {
    return dataStore.getData("about");
};

module.exports = helloGraphQlResolver;