function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falarNome(){
            console.log(`Olá, eu sou'  ${this.nome} ${this.sobrenome}!`)
        }
    }
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Fabio', 'Nagamine');
console.log(p1);


