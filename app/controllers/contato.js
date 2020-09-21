var ID_CONTATO_INC = 4;
var contatos = [
  { _id: 1, nome: "Gabriela Mota", email: "gabriela.mota@aluno.ifsp.edu.br" },
  {
    _id: 2,
    nome: "Larissa Marques",
    email: "larissa.marques@aluno.ifsp.edu.br",
  },
  { _id: 3, nome: "Bruno Bica", email: "bruno.bica@aluno.ifsp.edu.br" },
  { _id: 4, nome: "Beatriz Gomes", email: "beatriz.gomes@aluno.ifsp.edu.br" },
];
module.exports = function () {
  var controller = {};
  controller.listaContatos = function (req, res) {
    res.json(contatos);
  };
  controller.obtemContatos = function (req, res) {
    console.log("Selecionou o contato " + req.params.id);
    const { id } = req.params;
    const contato = contatos.filter(function (contato) {
      return contato._id == id;
    })[0];
    contato
      ? res.json(contato)
      : res.status(404).send("Contato não encontrado");
  };
  controller.salvaContato = function (req, res) {
    var contato = req.body;
    contato = contato._id ? atualiza(contato) : adiciona(contato);
    res.json(contato);
  };
  function adiciona(contatoNovo) {
    contatoNovo._id = ++ID_CONTATO_INC;
    contatos.push(contatoNovo);
    return contatoNovo;
  }
  function atualiza(contatoAlterar) {
    contatos = contatos.map((contato) => {
      if (contato._id === contatoAlterar._id) {
        contato = contatoAlterar;
      }
      return contato;
    });
    return contatoAlterar;
  }
  controller.removerContato = function (req, res) {
    const { id } = req.params;
    contatos = contatos.filter(function (contato) {
      return contato._id != id;
    });

    res.status(204).send("Deletado").end();
  };
  return controller;
};
