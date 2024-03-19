// Função Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}


const data = new Date();


const pessoa1 = new Pessoa('Rafael', 'Oliveira');
const pessoa2 = new Pessoa('Felipe', 'Soares');

console.dir(pessoa1);

console.dir(pessoa2);

console.dir(data);
for(let date in Date){
    console.dir(date.prototype);
}
console.log(Date.prototype.keys());