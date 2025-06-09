/*
    Receba do usuário uma data no formato YYYY-MM-DD (ex. 2025-11-21)
    Retorne com window.alert a data no formato DD/MM/YYYY
*/

const data = prompt("Digite uma data (YYYY-MM-DD):");

const infos = data.split('-');

const exemploPalavra = 'Palavra Exemplo';

console.log('Data em formato DD/MM/YYYY:', (infos[2] + '/' + infos[1] + '/' + infos[0]));