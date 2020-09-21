var ID_CURSO_INC = 4;
var cursos = [
  {
    _id: 1,
    curso: "Engenharia de Produção",
    coordenador: "sandro@ifsp.edu.br",
  },
  {
    _id: 2,
    curso: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    coordenador: "isabela@ifsp.edu.br",
  },
  {
    _id: 3,
    curso: "Licenciatura em Letras Português/Inglês",
    coordenador: "paulo@ifsp.edu.br",
  },
  {
    _id: 4,
    curso: "Tecnologia em Gestão Pública",
    coordenador: "maria.luiza@ifsp.edu.br",
  },
];
module.exports = function () {
  const controller = {};
  controller.listaCursos = function (req, res) {
    res.json(cursos);
  };
  controller.obtemCursos = function (req, res) {
    const { id } = req.params;
    console.log("Selecionou o curso " + id);
    const curso = cursos.filter(function (curso) {
      return curso._id == id;
    })[0];
    curso ? res.json(curso) : res.status(404).send("Curso não encontrado");
  };
  controller.removeCurso = function (req, res) {
    const { id } = req.params;
    cursos = cursos.filter(function (curso) {
      return curso._id != id;
    });
    res.status(204).send("Deletado").end();
  };

  controller.salvaCurso = function (req, res) {
    var contato = req.body;
    contato = contato._id ? atualiza(contato) : adiciona(contato);
    res.json(contato);
  };
  function adiciona(cursoNovo) {
    cursoNovo._id = ++ID_CURSO_INC;
    cursos.push(cursoNovo);
    return cursoNovo;
  }
  function atualiza(cursoAlterar) {
    cursos = cursos.map((curso) => {
      if (curso._id === cursoAlterar._id) {
        curso = cursoAlterar;
      }
      return curso;
    });
    return cursoAlterar;
  }
  return controller;
};
