//Opérateur spread
//These variables are globales
touches = [...document.querySelectorAll('.butt')];
const listKeyCode = touches.map(e => e.dataset.kkey);
const ecran = document.querySelector('.screen');
//console.log(ecran);


//Event when press down a button
document.addEventListener('keydown', (e) => 
{
    valeur = e.keyCode.toString();
    calculer(valeur);
})

//Event when click with mouse on a button
document.addEventListener('click', (e) => 
{
    //console.log(e);
    const valeur = e.target.dataset.kkey
    calculer(valeur);
})

//Error traitement 
window.addEventListener('error', (e) =>{
    alert("erreur : " + e.message);
})



//Calcule de la calculatrice
const calculer = (valeur) => 
{
    if(listKeyCode.includes(valeur)){
        switch(valeur)
        {
            case '8' :
                ecran.textContent = "";
                break;
            case "13": 
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default : 
                const indexKeyCode = listKeyCode.indexOf(valeur);
                const a_touch = touches[indexKeyCode];
                ecran.textContent += a_touch.innerHTML;
        }
    }
}