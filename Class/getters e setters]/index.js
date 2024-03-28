// const _velocidade = Symbol(); //Propriedade privada

// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }
//     acelerar(){
//         this[_velocidade]++;
//         this.limiteVelocidade();
//     }

//     limiteVelocidade(){
//         if(this[_velocidade] >= 120){
//            this[_velocidade] = 120;
//            console.log('velocidade máxima atingida')
//            return;
//         }
//         if(this[_velocidade] == 0){
//             this[_velocidade] = 0;
//             return;
//         }
//     }

//     freiar(){
//         this[_velocidade]--;
//         this.limiteVelocidade();
//     }

//     get velocidade(){
//         return this[_velocidade]
//     }

//     set velocidade(velocidade){
//         if(typeof velocidade !== 'number'){
//             throw new Error("A velocidade deve ser um número");
//         }
//         this[_velocidade] = velocidade;
//         if(velocidade > 120 || velocidade < 0){
//             throw new Error("Velocidade inválida");
//         }
//     }
// }

// const carro1 = new Carro('Gol');

// for(let i = 0; i <= 200; i++){
//     carro1.acelerar();
//     console.log(carro1[_velocidade]);

// }
// carro1.velocidade = 134;


class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    set setNome(nomeNovo){
        this._nome = nomeNovo;
    }

    set setSobrenome(novoSobrenome){
        this._sobrenome = novoSobrenome;
    }

    get getNome(){
        return this._nome;
    }

    get getSobrenome(){
        return this._sobrenome;
    }

    get nomeCompleto(){
        return `${this._nome}  ${this._sobrenome}`;
    }
    
    set nomeCompleto(outroNome){
        console.log(outroNome);
        let nome = outroNome.split(' ');
        this._nome = nome.shift(); //remove  o primeiro elemento do array e retorna ele
        console.log('shift: ' + this._nome); 
        this._sobrenome = nome.join(' '); // junta  todos os elementos que estão no array em uma string 
        console.log('join: ' + this._sobrenome);
    }
}

const pessoa1 = new Pessoa('Fabio', 'Nagamine');

pessoa1.setNome = 'Takashi';

// console.log(pessoa1.nomeCompleto);
pessoa1.nomeCompleto  = "Fabio Takashi Nagamine" ;
console.log(pessoa1.nomeCompleto);