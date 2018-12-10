const dataStore = require("../../dataStore.js");

const addUserMutation = ({id, name, address, phoneNos}) => {
    var user = {
        id: id, name: name, address: address, phoneNos: phoneNos
    };
    dataStore.getData("users").push(user);
    return user;
}

module.exports = addUserMutation;