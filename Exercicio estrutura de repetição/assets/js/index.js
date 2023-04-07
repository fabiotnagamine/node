document.addEventListener('DOMContentLoaded', function() {
    let paragrafos = document.querySelector('.prr');
    const ps = paragrafos.querySelectorAll('p'); 

    const estilosBaby = getComputedStyle(document.body);
    const backGroundColor = estilosBaby.backgroundColor;
    
    for (p of ps){
        p.style.backGroundColor = backGroundColor;
        p.style.color = 'red';
    }
})
 