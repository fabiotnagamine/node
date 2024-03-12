let dados = [1,2,3,4,5];

let soma = (x,y) =>{
    return x + y;
}

let raiz = (x) => {
    return x * x;
}

let media = dados.reduce(soma) / dados.length;
console.log(dados.reduce);



// Criando uma função que retorna os passos do reduce
let passos = [];
media = dados.reduce((acumulador, valorAtual, indice, array) => {
    passos.push({
        acumulador,
        valorAtual,
        indice,
        array
    });
    return soma(acumulador, valorAtual);
});

console.log("Passos do reduce():");
passos.forEach((passo, index) => {
    console.log(`Passo ${index + 1}:`, passo);
});


const numeros = [5, 10, 15, 20, 35, 40, 568,56661, 56224899];
const numerosPares = numeros.filter((valor) => {
    return  valor % 2 === 0;
}).map((valor) =>{
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador + valor;
});

console.log('Numeros Pares:', numerosPares);


