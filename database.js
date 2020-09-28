const findDocuments = function (db, callback) {
  const collection = db.collection("contatos");
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Foram encontrados os seguintes docs: ");
    console.log(docs);
    callback(docs);
  });
};
const mongoCliente = require("mongodb").MongoClient;
const assert = require("assert");
const url =
  "mongodb+srv://root:root@dsaw-acs.wum0r.mongodb.net/ifsp?retryWrites=true&w=majority";
dbName = "ifsp";
mongoCliente.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    assert.equal(null, err);
    console.log("Aluno: Gabriela Mota");
    console.log("Servidor conectado");

    const db = client.db(dbName);
    findDocuments(db, function () {
      client.close();
    });
  }
);
