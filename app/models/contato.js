const mongoose = require("mongoose");

const { Schema } = mongoose;

module.exports = function () {
  const Contato = Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true, index: { unique: true } },
  });
  return mongoose.model("Contato", Contato);
};
