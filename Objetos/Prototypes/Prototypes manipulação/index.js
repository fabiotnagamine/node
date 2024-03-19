// const objA = {
//     chaveA: 'a'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'b'
//     //__proto__: objA
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objA);
// console.log(Object.getPrototypeOf(objC).chaveA); // Saída: 'a'
//     //-----------------------------------------------//

const objA = {
    chaveA: 'a'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'b',
    __proto__: objA
};

const objC = {
    chaveC: 'C',
    __proto__: objA
};

console.log(objC.chaveA); // Saída: 'a'


function Produto(nome, preco){
    this.mnome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = (percentual) => {
    this.preco = this.preco - (this.preco * percentual / 100);
};

Produto.prototype.aumento = (percentual) => {
    this.preco = this.preco + (this.preco * percentual / 100);
};

const p1 = new Produto('Arroz', 50)
p1.desconto(10)
console.log(p1);

