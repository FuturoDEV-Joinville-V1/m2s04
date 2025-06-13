/*
    A partir do array abaixo, coloque no console um novo array contendo os números formatados em valor monetário.
        const precos = [12.5, 30, 99.99, 5] ;

    Valor esperado:
        [ “R$ 12.50”, “R$ 30.00”, “R$ 99.99”, “R$ 5.00” ] ;
*/

const precos = [12.5, 30, 99.99, 5] ;

// Pass a function to map
const precosFormatados = precos.map((valor) => 'R$ ' + valor.toFixed(2));

console.log(precosFormatados);

