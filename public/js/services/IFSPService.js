angular
  .module("ifsp")
  .factory("Contato", function ($resource) {
    return $resource("/contatos/:id");
  })
  .factory("Curso", function ($resource) {
    return $resource("/cursos/:id");
  });
