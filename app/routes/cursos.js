module.exports = function (app) {
  var controller = app.controllers.cursos;
  app.route("/cursos").get(controller.listaCursos).post(controller.salvaCurso);
  app
    .route("/cursos/:id")
    .get(controller.obtemCursos)
    .delete(controller.removeCurso);
};
