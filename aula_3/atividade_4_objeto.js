/*
    Crie um objeto chamado ‘carro’ com as propriedades:
        marca
        modelo
        ano
    Adicione um método chamado descricao() que retorne a string: "Carro: [marca] [modelo] [ano]"
*/

const carro = {
    marca: 'Honda',
    modelo: 'Fit',
    ano: 2015,
    descricao: function() {
        console.log(`Carro: ${this.marca} ${this.modelo} - ${this.ano}`);
    }
}

carro.descricao();