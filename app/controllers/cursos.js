module.exports = function (app) {
  const Curso = app.models.Curso;
  const controller = {};
  controller.listaCursos = function (req, res) {
    Curso.find()
      .exec()
      .then(
        function (cursos) {
          res.json(cursos);
        },
        function (error) {
          console.log(error);
          res.status(500).send(error);
        }
      );
  };
  controller.obtemCursos = function (req, res) {};
  controller.removeCurso = function (req, res) {};
  controller.salvaCurso = function (req, res) {};

  return controller;
};
