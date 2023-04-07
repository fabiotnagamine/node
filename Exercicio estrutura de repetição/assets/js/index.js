const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); 

const estilosBaby = getComputedStyle(document.body);
const backGroundColor = estilosBaby.backgroundColor()

for(let p of ps ){
    console.log(p);
}

 