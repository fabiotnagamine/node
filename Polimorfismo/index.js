function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this. conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo >= valor){
        this.saldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log(`Deposito no valor de ${valor} realizado com sucesso!`);
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia}` + "\n" + `Conta: ${this.conta}` + "\n" + `Valor: ${this.saldo}`);
    return this.saldo;
};
const conta1 = new Conta(102, 3546789, 500);
// conta1.verSaldo(); //Mostra o Saldo da conta
conta1.depositar(100.11);

function ContaCorrrente(agencia, conta,  saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrrente.prototype = Object.create(Conta.prototype);
ContaCorrrente.prototype.constructor = ContaCorrrente;

ContaCorrrente.prototype.saque = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log("Saldo insuficiente");
    }

    this.saldo -= valor;
    this.verSaldo();
};


const contaCorrente1 = new ContaCorrrente(123, 123456, 1200, 1200);

contaCorrente1.saque(3400);
contaCorrente1.depositar(10000);
