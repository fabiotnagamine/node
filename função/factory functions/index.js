function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
    
        get nomeCompleto(){
            return `${this.nome} ${sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            console.log(valor);
        },
        
        fala: function (assunto) {
            return `${nome} está ${assunto} \n altura: ${altura} \n peso: ${peso}`;
        }, 
        altura: altura, 
        peso: peso,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}


const p1 = criaPessoa("fabio", "nagamine", 1.80, 88);
p1.nomeCompleto = "Nagamine Takashi";
console.log(p1.nomeCompleto);
console.log("IMC:" + p1.imc);
console.log(p1.fala("estudando"));