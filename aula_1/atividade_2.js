/*
    Solicite ao usuário a inclusão de uma fruta em nosso carrinho de compras;
    Adicione a fruta na primeira posição da lista.
    Caso o número de itens no carrinho ultrapasse de 5 itens, receba a  última fruta digitada e retire da nossa lista a mais antiga.
    Caso o usuário digite ‘Sair’, pare a solicitação de novas frutas e exiba em nosso console a atual listagem de frutas

    FIFO (FILA)
*/

let textoSaida = '';
const carrinho = [];

do {
    const fruta = prompt('Digite uma fruta:');

    //push: adiciona ao final do array
    //unshift: adiciona ao início do array
    carrinho.unshift(fruta);

    if (carrinho.length > 5) {

        //pop: remove do final do array
        //shift: remove do início do array
        carrinho.pop();
    }

    textoSaida = prompt('Deseja continuar? (Digite "sair" para encerrar)');
    
} while (textoSaida.toLowerCase() !== 'sair');

console.log('Carrinho', carrinho);
