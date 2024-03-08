let dados = [1,2,3,4,5];

const mean = (dados) => {
    let soma = 0;
    for(let i = 0; i < dados.length; i++){
        soma += dados[i];
    }
    return soma / dados.length;
}
console.log(mean(dados));