var alunos = require("../alunos");

function Curso(nomeCurso, notaDeAprovacaoCurso, faltasMaximasCurso) {
  this.nome = nomeCurso;
  this.notaDeAprovacao = notaDeAprovacaoCurso;
  this.faltasMaximas = faltasMaximasCurso;
  this.listaDeEstudantes = alunos;
  this.addEstudante = (estudanteNovo) =>
    this.listaDeEstudantes.push(estudanteNovo);
  this.foiAprovado = (estudanteQuestionador) => {
    if (
      (estudanteQuestionador.calcularMedia() >= this.notaDeAprovacao &&
        estudanteQuestionador.faltas < this.faltasMaximas) ||
      (estudanteQuestionador.calcularMedia() >= this.notaDeAprovacao * 1.1 &&
        estudanteQuestionador.faltas == this.faltasMaximas)
    ) {
      return true;
    } else {
      return false;
    }
  };
  this.alunosAprovados = () =>
    this.listaDeEstudantes.map((aluno) => this.foiAprovado(aluno));
}

module.exports = Curso;
