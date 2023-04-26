/**
 * Para o método some, temos que se tiver algum valor que satisfaça a 
 * condição podemos ter um retorno true, caso ele não encontre nada
 * retorna falso
 */

// Retorno true

a = [1, 2, 3, 4]
b = a.some(function(x){
    return x > 2;
});
console.log(b);

// Retorno false
c = a.some(function(x){
    return x > 10;
});

console.log(c);

/**
 * Podemos perceber que ao não encontrar valores correspondente a condição
 * o retorno será falso, caso ao contrário poderiamos ver um true
 */