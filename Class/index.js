class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(`Pessoa nome ${p1.nome} sobrenome ${p1.sobrenome}`)