/**
 * Para o método every (para todo) temos um predicado, retorna true ou false
 * Porém o true será retornado se todos os valores forem true, 
 * caso contrário retornará false
 */

a = [1, 2, 3]

b = a.every(function(x){
   return x < 5;
});

console.log(b);


/**
 * Podemos ver que se alguma valor de a fosse maior que 5, b teria 
 * como retorno uma false, pois teria invalidado a condição
 */