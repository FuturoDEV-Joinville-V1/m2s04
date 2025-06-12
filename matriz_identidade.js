

const num = prompt("Digite um número");

let linhaMatriz = '';

for( let linha = 0; linha < num; linha++) {
    for( let coluna = 0; coluna < num; coluna++) {
        //if (linha === coluna) {
        //    linhaMatriz += '1';
        //} else {
        //    linhaMatriz += '0';
        //}
        linhaMatriz += linha === coluna ? '1' : '0';
    }
    console.log(linhaMatriz);
    //linhaMatriz = ''; // reinicializando
}
