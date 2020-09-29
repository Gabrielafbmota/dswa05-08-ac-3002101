module.exports = function (app) {
  const Curso = app.models.curso;
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
  controller.obtemCursos = function (req, res) {
    const { id } = req.params;
    Curso.findById({ _id: id })
      .exec()
      .then(
        function (curso) {
          if (!curso) throw new Error("Curso não encontrado");

          res.status(200).send(curso);
        },
        function (error) {
          console.error(error);
          res.status(500).send(error);
        }
      );
  };
  controller.removeCurso = function (req, res) {
    const { id } = req.params;
    Curso.deleteOne({ _id: id })
      .exec()
      .then(
        function () {
          res.end();
        },
        function (error) {
          console.error(error);
          res.status(500).send(error);
        }
      );
  };
  controller.salvaCurso = function (req, res) {
    const { id } = req.body;
    if (id) {
      Curso.findByIdAndUpdate({ _id: id }, req.body)
        .exec()
        .then(
          function (curso) {
            console.log(curso);
            res.json(curso);
          },
          function (error) {
            console.error(error);
            res.status(500).send(error);
          }
        );
    } else {
      Curso.create(req.body).then(
        function (curso) {
          res.json(curso);
        },
        function (error) {
          console.error(error);
          res.status(500).send(error);
        }
      );
    }
  };

  return controller;
};
