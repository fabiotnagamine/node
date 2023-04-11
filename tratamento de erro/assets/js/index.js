// function soma(x, y){
//     if (typeof x  !== 'number' || typeof y !== 'number'){
//         throw("x e y devem ser números");
//     }
//     return soma
// }

// try{
//     console.log(soma(1, 3));
//     console.log(soma('1',5))
// }catch(errr){
//     console.log(errr);
// }


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour12: true
    });
}
try{
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    console.log(e);
}finally{
    console.log("tenha um ótimo dia");
}



