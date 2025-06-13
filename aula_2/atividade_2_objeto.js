/*
  Crie um array chamado ‘alunos’ que irá conter 5 objetos com as propriedades:
    nome
    turma
    nota
  Percorra o array de forma a validar se a nota do aluno é maior que 6; se positivo, inclua no objeto uma propriedade chamada ‘aprovado’ com o valor true; caso contrário, inclua a propriedade chamada ‘aprovado’ com o valor false;
  Exibir a lista atualizada no console.
*/

const alunos = [
  {
    nome: 'João da Silva',
    turma: 'Turma 1',
    nota: 5
  },
  {
    nome: 'Pedro da Silva',
    turma: 'Turma 2',
    nota: 7
  },
  {
    nome: 'Maria da Silva',
    turma: 'Turma 2',
    nota: 8
  },
  {
    nome: 'Eduardo da Silva',
    turma: 'Turma 1',
    nota: 6
  },
  {
    nome: 'Eli da Silva',
    turma: 'Turma 1',
    nota: 9
  }
];

const alunosAtualizados = alunos.map(aluno => {
  /*
  if (aluno.nota > 6) {
    aluno.aprovado = true;
  } else {
    aluno.aprovado = false;
  }
  */

  aluno.aprovado = aluno.nota > 6;

  return aluno;
});

console.log(alunosAtualizados);