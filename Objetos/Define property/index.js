function Produto(nome, preco, estoque){ 
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });
}

const p1 = new Produto('Camiseta', 20, 300);
p1.estoque = 500;
console.log(p1);