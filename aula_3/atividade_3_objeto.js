/*
    Crie um objeto que possua as propriedades de um cadastro de um novo usuário em um sistema (inclua a quantidade de propriedades que desejar).
    Exiba no console, dinamicamente, a quantidade de propriedades desse objeto
*/

const cadastro = {
    nome: 'Nome Completo',
    email: 'mail@mail.com'
    //...
};

let contador = 0;

for (const propriedade in cadastro) {
    contador += 1;
    console.log(`Propriedade ${contador}`, propriedade);
}

console.log('Total de propriedades:', contador);