/**
 * Suponhamos que temos um array de números e queremos calcular a média desses 
 * números podemos fazer da seguinte maneira
 */

let data = [1,2,3,4,5,6,7,8,9,10];

let total = 0;
for (let i in data){
    total += data[i];
}
let mean = total/ data.length;

console.log(mean);

/**
 * Usando a progamação funcional com o mesmo array
 * Map() passa cada elemento do array em que é chamado para a função especificada
 * e retorna um array contendo os valores retornados por essa função
 */

let sum = function(x,y){return x + y;};

mean = data.reduce(sum)/data.length;

console.log(mean);