/**
 * O método reduce combinam os elementos de um array usando a função 
 * especificada para produzir um unicoo valor.
 */

let a = [1,2,3,4,5,545, 468, 467865, 2646, 56456, 222223, 5569415]
let sum = a.reduce(function(x,y) { return x+y }, 0); // Soma de valores
let product = a.reduce(function(x,y) { return x*y }, 1); // Produto de valores
let max = a.reduce(function(x,y) { return (x>y)?x:y; }); // Maior valor

console.log(sum, product, max);

const total = a.reduce(function(acumulador, valor, indice, array){
    // acumulador += valor;
    // return acumulador;
    if(valor % 63 == 0) {
        acumulador.push(valor)
    }
    return acumulador;
},[]);

console.log("Total " + total);