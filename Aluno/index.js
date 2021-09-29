function Aluno(nomeAluno, faltasAluno, notasAluno) {
  this.nome = nomeAluno;
  this.faltas = faltasAluno;
  this.notas = notasAluno;
  this.calcularMedia = () =>
    this.notas.reduce((acumulador, elemento) => acumulador + elemento) /
    this.notas.length;
  this.adicionaFaltas = () => this.faltas++;
}

module.exports = Aluno;
