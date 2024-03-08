let dados = [1,2,3,4,5];

let soma = (x,y) =>{
    return x + y;
}

let raiz = (x) => {
    return x * x;
}

let media = dados.reduce(soma) / dados.length;
console.log(dados.reduce);


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
