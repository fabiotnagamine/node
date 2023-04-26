/**
 * Map() passa cada elemento do array em que é chamado para a função especificada
 * e retorna um array contendo os valores retornados por essa função
 */

a = [ 1, 2, 3 ];

b = a.map(function(x) {
    return x * x
});

c = a.map(function(x) {
    return x;
});

console.log(b);
console.log(c);


/**
 * A função map deve sempre retornar algum valor
 * Em "b" podemos ver que o valor é multiplicado por ele mesmo
 * Em "c" podemos ver que os mesmos valores de "a" foram passados para "c"
 */