
const aluno = {
    nome: 'João da Silva',
    turma: 'Turma 1',
    nota: 5
};

for (let propriedade in aluno) {
    console.log('Propriedade: ', propriedade);
    console.log('Valor: ', aluno[propriedade]);
}