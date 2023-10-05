const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb+srv://dbmichael:<Galoucura13@#>@michael.lz3p48b.mongodb.net/")
            .then(conn => global.conn = conn.db("Maps"))
            .catch(err => console.log(err))

function findAll() {
    return global.conn.collection("customers").find().toArray();
}

function insert(customer) {
    return global.conn.collection("customers").insertOne(customer);
}

const ObjectId = require("mongodb").ObjectId;

function findOne(id) {
    return global.conn.collection("customers").findOne(new ObjectId(id));
}

function update(id, customer) {
    return global.conn.collection("customers").updateOne({ _id: new ObjectId(id) }, { $set: customer });
}
function deleteOne(id) {
    return global.conn.collection("customers").deleteOne({ _id: new ObjectId(id) });
}
 
module.exports = { findAll, insert, findOne, update, deleteOne }

