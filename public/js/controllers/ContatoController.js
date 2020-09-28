angular
  .module("ifsp")
  .controller("ContatoController", function ($scope, $routeParams, Contato) {
    if ($routeParams.contatoId) {
      Contato.get(
        { id: $routeParams.contatoId },
        function (contato) {
          $scope.contato = contato;
        },
        function (error) {
          $scope.mensagem = { texto: "Não foi possivel obter o contato" };
          console.log($routeParams.contatoId);
          console.log(error);
        }
      );
    } else $scope.contato = new Contato();

    $scope.salva = function () {
      $scope.contato
        .$save()
        .then(function () {
          $scope.mensagem = { texto: "Salvo com sucesso" };
          $scope.contato = new Contato();
        })
        .catch(function (err) {
          console.log(err);
          $scope.mensagem = { texto: "não foi possivel salvar o contato" };
        });
    };
  });
