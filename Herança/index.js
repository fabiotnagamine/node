/***
 * Produtos - métodos de aumentar preço e desconto 
 * Temos ós seguintes itens: caneca, lápis, garrafa, camiseta etc...
 * Esses itens podem ser considerados como um produto de uma loja
 * Dentro desses itens podemos ter propriedades como por exemplo cores, tamanho, quantidade etc...
 * 
 */

function Produto(nome, preco){
    this.nome =  nome;
    this.preco = preco;

}

Produto.prototype.aumentaPreco = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor)  {
    this.preco -= valor
}
Camiseta.prototype = Object.create(Produto.prototype); //Herdando o prototype do prodoto
Camiseta.prototype.constructor = Camiseta; //No prototype agora aparece o construtor de Produto




function Camiseta(nome, preco, cor ){
    Produto.call(this, nome, preco);
    this.cor = cor;

}


function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return  estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                return;
            }
             estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta('Regata',78.25, 'amarela' );
camiseta.aumentaPreco(20);
console.log(camiseta);


const caneca = new Caneca('Caneca', 13, 'preta', 'plastico', 15);


caneca.estoque = 100;

console.log(caneca.estoque);