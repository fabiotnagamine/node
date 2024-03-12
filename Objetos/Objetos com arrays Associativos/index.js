

let carro = {
    cor: 'Amarelo',
    marca: 'Fiat',
    modelo: 'Uno',
}

let carro2 = new Array();
carro2['cor'] = 'Verde';
carro2['marca'] = 'BMW';
carro2['modelo'] = '320i';

console.log(carro.cor);

console.log(carro2['marca']);

const chave = 'modelo';

console.log(carro2[chave]);


Object.freeze(carro2); //Congela o Objeto para não modificação

console.log(carro2);
carro2.cor  = "Vermelho";
delete carro2.marca;

console.log(carro2);