const pessoas = [
    {id:3, nome: 'Fernando'},
    {id:1, nome: 'Fabio'},
    {id:2, nome: 'Maria'},
];
// pessoas.map(function(item){
//    console.log(`Nome da Pessoa: ${item.nome} tem o ID ${item.id}`);  
// }); // com o map podemos mapear a forma que queremos  apresentar os dados

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const { id } = pessoas;
//     novasPessoas[id] = { ...pessoas };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoas })
}

console.log(pessoas);

for (const [identifier, { id, nome }] of novasPessoas){
    console.log(identifier, novasPessoas);
}



