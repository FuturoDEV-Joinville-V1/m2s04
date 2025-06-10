/*
    A partir do array abaixo, coloque no console um novo array contendo apenas os valores do tipo string deste array.
        const dados = [123, "texto", true, "palavra", 99, "JS"] ;    
    Valor esperado:
        [ “texto”, “palavra”, “JS” ]  ;  

*/

const dados = [123, "texto", true, "palavra", 99, "JS"];
const arrayStrings = []

for (valor of dados) {
    if (typeof valor === 'string') {
        arrayStrings.push(valor);
    }
}

//console.log('dados', typeof dados)

console.log(arrayStrings);