const dataStore = require("../../dataStore.js");

const updateAbout = function({ message }) {
    dataStore.addData("about", message);
    return message;
}

module.exports = updateAbout;