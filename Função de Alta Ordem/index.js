/***
 * 
As funções de alta ordem são aquelas que podem receber outras funções como argumentos e/ou retornar funções como resultado. Elas são um conceito fundamental na programação funcional e proporcionam uma maneira flexível e poderosa de abstrair e manipular comportamentos em programas.

Além disso, as funções de alta ordem podem ser usadas em conjunto com funções de callback, closures e composição de funções para criar código mais conciso, legível e modular. Elas são uma ferramenta poderosa para lidar com operações complexas de forma elegante e eficiente.
 
Ultima Função
*/

function not(f) {
    return function () {
        let result = f.apply(this, arguments);
        return !result;
    };
}

let even = (x) => {
    return x % 2 === 0;
};

let data = [1, 5, 3, 6, 9, 55, 20, 45, 36, 47, 556, 220];

let odd = even;
console.log([1, 5, 3, 6, 9, 55, 20, 45, 36, 47, 556, 220].every(odd));

function mapper(f) {
    return function (a) {
        return a.map(f);
    };
}
let increment = (x) => {
    return x + 1;
};
let incrementer = mapper(increment);
console.log(incrementer([1, 2, 3, 4, 5, 6]));

function applyOperation(array, operation) {
    return array.map(operation);
}

let double = (x) => {
    return x * 2;
};
let numbers = [43, 45, 89, 12, 56];
console.log("Numbers doubled: ", applyOperation(numbers, double));



/************************************************************************************************ */
const createMultiplier = (factor) => {
    return (x) => {
        return x * factor;
    }
}

double = createMultiplier(2);
console.log(double(5));

let triple = createMultiplier(3);
console.log(triple(5));
