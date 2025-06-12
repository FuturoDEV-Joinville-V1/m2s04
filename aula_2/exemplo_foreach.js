/*
    Exemplo de utilização do método forEach 
    baseado na Atividade 4 - Aula 2
*/

const precos = [12.5, 30, 99.99, 5];

precos.forEach(valor => {
    console.log('R$ ' + valor.toFixed(2));
});
