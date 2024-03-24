function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ""); //substuição dos caracteres não numerais por nada ""
        }
    })
}
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        console.log(regressivo);
        regressivo--;
        return ac;
    }, 0);
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
}
const cpf = new ValidaCPF('123.456.789-10');
console.log(cpf.valida());



