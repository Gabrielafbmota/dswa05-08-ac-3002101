angular
  .module("ifsp")
  .controller("ContatosController", function ($scope, Contato) {
    $scope.contatos = [];
    $scope.filtro = "";
    $scope.mensagem = { texto: "" };

    function searchContacts() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
          $scope.mensagem = {};
        },
        function (erro) {
          console.log("Não foi possivel objer a lista de contatos");
          console.log(erro);
          $scope.mensagem = {
            texto: "Não foi possivel objer a lista de contatos",
          };
        }
      );
    }
    searchContacts();

    $scope.remove = function (contato) {
      console.log(contato);
      Contato.delete({ id: contato._id }, searchContacts, function (erro) {
        console.log("Não foi possivel remover o contato");
        console.log(erro);
      });
    };
  });
