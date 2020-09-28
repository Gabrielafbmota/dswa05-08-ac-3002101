module.exports = function (app) {
  const Contato = app.models.contato;

  const controller = {};

  controller.listaContatos = function (req, res) {
    Contato.find()
      .exec()
      .then(
        function (contatos) {
          res.json(contatos);
        },
        function (error) {
          console.log(error);
          res.status(500).send(error);
        }
      );
  };
  controller.obtemContatos = function (req, res) {
    const { id } = req.params;
    Contato.findById({ _id: id })
      .exec()
      .then(
        function (contato) {
          if (!contato) throw new Error("Contato não encontrado");

          res.json(contato);
        },
        function (error) {
          console.error(error);
          res.status(500).send(error);
        }
      );
  };
  controller.salvaContato = function (req, res) {
    const { id } = req.params;
    Contato.deleteOne({ _id: id })
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
  controller.removerContato = function (req, res) {
    const { id } = req.body;
    if (id) {
      Contato.findByIdAndUpdate({ _id: id }, req.body)
        .exec()
        .then(
          function (contato) {
            res.json(contato);
          },
          function (error) {
            console.error(error);
            res.status(500).send(error);
          }
        );
    } else {
      Contato.create(req.body)
        .exec()
        .then(
          function (contato) {
            res.json(contato);
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
