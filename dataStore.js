
var DataStore = function() {
    console.log("Data Store initialized");
    var store = {};
    this.addData = function (key, value) {
        store[key] = value;
    };

    this.getData = function(key, value) {
        if(!store.hasOwnProperty(key)) {
            throw Error("Invalid key : " + key);
        }
        return store[key];
    };

    (()=> {
        store["about"] = "Hello GraphQL!!!";
        store["users"] = [
            {
                id: 1,
                name: "Navkirat",
                address: "273, Chandigarh",
                phoneNos: ["9999999999", "1234567"]
            }
        ]
    })();
}

module.exports = new DataStore();