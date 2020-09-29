angular
  .module("ifsp")
  .controller("CursoController", function ($scope, $routeParams, Curso) {
    if ($routeParams.cursoId) {
      Curso.get(
        { id: $routeParams.cursoId },
        function (curso) {
          $scope.curso = curso;
        },
        function (error) {
          $scope.mensagem = { texto: "Não foi possivel obter o curso" };
          console.log($routeParams.cursoId);
          console.log(error);
        }
      );
    } else $scope.curso = new Curso();
    $scope.salva = function () {
      $scope.curso
        .$save()
        .then(function () {
          $scope.mensagem = { texto: "Salvo com sucesso" };
          $scope.curso = new Curso();
        })
        .catch(function (err) {
          console.log(err);
          $scope.mensagem = { texto: "não foi possivel salvar o curso" };
        });
    };
  });
