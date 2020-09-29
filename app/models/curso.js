const mongoose = require("mongoose");

const { Schema } = mongoose;

module.exports = function () {
  const Curso = Schema({
    curso: { type: String, require: true },
    coordenador: { type: String, require: true, index: { unique: true } },
  });
  return mongoose.model("Curso", Curso);
};
