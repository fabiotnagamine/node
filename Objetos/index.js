
// Criando um objeto
let carro = new Object();

// Propriedades do objeto usando notação de pontos 
carro.marca = 'Ford';
carro.modelo = 'Mustang';
carro.ano = 2024;

// Agora usando a notação de colchetes
carro['cor'] = 'Vermelho';
carro['motor'] = 'Turbo';
carro['combustivel'] = 'Gasolina';


for (let propriedade in carro) {
    console.log(propriedade);
}

// Função Object.create();
let cores = Object.create({ cor1: 'Amarelo', cor2: 'Verde', cor3: 'Azul' });


for (let cor in cores) {
    console.log(`A cor ${cor} é ${cores[cor]}`);
}
console.log(cores.toString());

function inherit(p) {
    if (p == null) {
        if (Object.create) {
            return Object.create(p);
        }
        let t = typeof p;
        if (t != 'object' && t !== 'function') {
            function f() {

            }
            f.prototype = p;
            return new f();
        }
    }

}


let empty = {}; // Um objeto sem propriedades
let point = { x: 0, y: 0 }; // Duas propriedades
let point2 = { x: point.x, y: point.y + 1 }; // Valores mais complexos
let book = {
    "main title": "JavaScript", // Os nomes de propriedade incluem espaços,
    'sub-title': "The Definitive Guide", // e hifens; portanto, usam strings literais
    "for": "all audiences", // for é uma palavra reservada; portanto, usa 
    // aspas
    author: { // O valor dessa propriedade é
        firstname: "David", // ele próprio um objeto. Note que
        surname: "Flanagan" // esses nomes de propriedade não têm aspas.
    }
};


let author = book.author; //Obtem a proprieadde autor de livros
let name = author.name;    // Obtem o nome do autor
let title = book['Main title']; //Obtem o titulo do livro

book.edition = 'first'; //Criação de uma propriedade de edição no objeto livro
book['Main title'] = 'New Title';

console.log(book);

const produto = { nome: 'Coca', preco: 5.50 };
const carrinho = {
    ...produto,
    quantidade: '2 Litros'
};

carrinho.nome = 'Coca-Cola';
carrinho.preco = 5.99;

console.log(produto);
console.log(carrinho);

// Object.assign(): 
const produtoMercado = Object.assign({}, produto, {
    quantidade: '2 Litros',
    embalagem: 'Garrafa Pet'
});

console.log(produtoMercado);

// Object.keys():
console.log("Keys: " + Object.keys(produtoMercado));

console.log('************************************************');
console.log(Object.getOwnPropertyDescriptor(produtoMercado, 'nome'));