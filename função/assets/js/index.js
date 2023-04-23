function funcao(){
    console.log("Hello world");
    console.log(arguments); 
    /**
     * Arguments vai tratar todos os argumentos de uma função mesmo que a função
     * não precise de um argumento
     */
}

funcao("Fabio Takashi Nagamine"); // <-  argumento = uma string

function argumentos(){
    let total = 0;
    for (let argumento of arguments ){
        total += argumento;
    }
    console.log(total);
}

argumentos(1,2,3,4,5,6,7,8,9,10); 