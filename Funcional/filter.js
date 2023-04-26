/**
 * O método filter retorna um array contendo um subconjunto dos elementos
 * do array em que é chamado.
 * A função passada deve ser um predicado, ou seja uma função que o 
 * retorno é true ou false
 */

exemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

a = exemplo.map(function(x){
    return x >= 5;
});

console.log(a);

/**
 * Perceba que podemos ver o resultado em forma de true e false, onde
 * os valores maiores e iguais a 5 tiveram como afirmações verdadeiras
 */