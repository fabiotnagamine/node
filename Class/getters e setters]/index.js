const _velocidade = Symbol(); //Propriedade privada

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    acelerar(){
        this[_velocidade]++;
        this.limiteVelocidade();
    }

    limiteVelocidade(){
        if(this[_velocidade] >= 120){
           this[_velocidade] = 120;
           console.log('velocidade máxima atingida')
           return;
        }
        if(this[_velocidade] == 0){
            this[_velocidade] = 0;
            return;
        }
    }

    freiar(){
        this[_velocidade]--;
        this.limiteVelocidade();
    }

    get velocidade(){
        return this[_velocidade]
    }

    set velocidade(velocidade){
        if(typeof velocidade !== 'number'){
            throw new Error("A velocidade deve ser um número");
        }
        this[_velocidade] = velocidade;
        if(velocidade > 120 || velocidade < 0){
            throw new Error("Velocidade inválida");
        }
    }
}

const carro1 = new Carro('Gol');

for(let i = 0; i <= 200; i++){
    carro1.acelerar();
    console.log(carro1[_velocidade]);

}
carro1.velocidade = 134;