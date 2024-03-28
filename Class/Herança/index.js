class Dispositivo{
    //Herança
    constructor(nome, fabricante){
        this.nome = nome;
        this.fabricante = fabricante;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado === true) {
            console.log('O dispositivo já está ligado');
            return;
        }
        console.log('Ligado')
        return this.ligado = true;
    }
    desligado(){
        if(this.ligado === false){
            console.log('O dispositivo ja está desligado');
            return;
        }
        console.log('desligado');
        return this.ligado = false;
    }
}

class DispositivoEletronico extends Dispositivo{
    constructor(nome, fabricante, cor) {
        super(nome, fabricante);
        this.cor = cor;
    }
    setCor(novaCor){
        this.cor = novaCor;
    }
    getCor(){
        return `A cor do dispositivo é ${this.cor}`;
    }
}

const  meuDispositivo = new DispositivoEletronico('TV', 'Samsung');
meuDispositivo.setCor('Preta');
console.log(meuDispositivo);

meuDispositivo.setCor('Prata');
console.log(meuDispositivo);