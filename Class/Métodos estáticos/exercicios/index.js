class Cpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
      enumerable: true,
    });
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    console.log(cpfSemDigitos);
    const digito1 = this.geraDigito(cpfSemDigitos);
    console.log('digito 1 --> ' + digito1);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1)
    console.log("digito 2 --> "  + digito2)
  }

  geraDigito(cpfSemDigitos) {
    let arrayCpf = Array.from(cpfSemDigitos);
    let regressivo = cpfSemDigitos.length + 1;
    let total = 0;

   

    const cpfTotal = arrayCpf.reduce((ac, valor) => {
      ac += regressivo * Number(valor);
      regressivo--;
      console.log(arrayCpf, regressivo, ac);
      return ac;
    }, 0);
    const digitos = 11 - (cpfTotal % 11);
    console.log(digitos);
    return digitos > 9 ? "0" : String(digitos);

  }

  isSequencia() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }
  valida() {
    if (typeof this.cpfLimpo !== "string") return false;
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.geraNovoCpf();
    return "Done";
  }
}
const cpf1 = new Cpf("238.730.068-80");
const cpfSequencia = new Cpf("111.111.111-11");
console.log(cpf1.valida());

