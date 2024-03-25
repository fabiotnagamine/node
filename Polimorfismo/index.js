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
ContaCorrrente.prototype.constructor = ContaCorrente;

ContaCorrrente.prototype.saque = function(valor){
    if(this.limite > valor && valor > this.saldo){
        this.saldo -= valor;
    }
}
