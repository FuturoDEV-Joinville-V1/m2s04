/*
    Crie uma função chamada quadrado.
    Esta função receberá como parâmetro um número e deverá retornar o quadrado deste número.
    Antes de realizar o cálculo, valide se o parâmetro passado é numérico. Se for, realize o cálculo, senão, exiba a mensagem: ‘Parâmetro incorreto’;
    Exiba no console o retorno desta função quando passado o parâmetro: 5
*/

const quadrado = (numero) => isNaN(numero) ? 'Parâmetro incorreto' : Math.pow(numero, 2);

console.log(quadrado(5));

