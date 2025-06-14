
function funcaoUm () {
    const saudacao = 'Terra';
    console.log('funcaoUm: Olá', saudacao);
}

function funcaoDois () {
    console.log('funcaoDois: Olá', saudacao);
    //Irá gerar erro de referencia
}

//funcaoUm();
//funcaoDois();

/**************************************************************************/
/*                             Arrow Function                             */    
/**************************************************************************/

//const somaDoisNumeros = (a, b) => a + b;

const somaDoisNumeros = (a, b) => {
    return a + b;
}

console.log('Resultado da soma:',somaDoisNumeros(1,2));
