class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g,""), //retirando todos os digitos que não são nem números por vazio
            writable: false,
            configurable:false, //Não deixa  ser alterada a propriedade
        });
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo;
    }

    geraNovoCPF(cpfLimpo){ 
        const cpfSemDigitos = cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;

    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso  * Number(stringNumerica);
            reverso--;
            console.log(reverso, total)
        }
        
        const digito = 11 - (total % 11);
        console.log("\nDigito: " + digito + "\n-------------")

        console.log( digito <= 9 ? String(digito) : "0")
        return digito <= 9 ? String(digito) : "0";
    }

    valida(){
        console.log(this.cpfLimpo);
        if(!this.cpfLimpo) {
            console.log('Erro 1');
            return false;
        }
        if(typeof this.cpfLimpo !== "string") {
            console.log("Erro 2");
            return false;
        }
        if(this.isSequencia()) {
            console.log("Erro 3");
            return false;
        }
        if(this.cpfLimpo.length !== 11) {
            console.log("Erro 4");
            return false;
        }
        this.geraNovoCPF(this.cpfLimpo);
        return this.novoCpf = this.geraNovoCPF;
    }


}
const  cpfValido = new ValidaCPF('238-730-068-80');
console.log(cpfValido.valida())