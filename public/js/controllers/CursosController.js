angular
  .module("ifsp")
  .controller("CursosController", function ($scope, $resource) {
    $scope.cursos = [];
    $scope.filtro = "";
    $scope.mensagem = { texto: "" };

    const Curso = $resource("/cursos/:id");

    function searchCourses() {
      Curso.query(
        function (cursos) {
          $scope.cursos = cursos;
          $scope.mensagem = {};
        },
        function (erro) {
          console.log("Não foi possivel carregar os cursos");
          $scope.mensagem = {
            texto: "Não foi possivel objer a lista de cursos",
          };
          console.log(erro);
        }
      );
    }
    searchCourses();

    $scope.remove = function (curso) {
      console.log(curso);
      Curso.delete({ id: curso._id }, searchCourses, function (erro) {
        console.log("Não foi possivel remover o curso");
        console.log(erro);
      });
    };
  });
