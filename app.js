touches = [...document.querySelectorAll('.butt')];
const listKeyCode = touches.map(e => e.dataset.kkey);
const ecran = document.querySelector('.screen');


//Event when press down a button
document.addEventListener('keydown', (e) => 
{
    //console.log(e);
    valeur = e.keyCode.toString();
    calculer(valeur);
})

//Event when click with mouse on a button
document.addEventListener('click', (e) => 
{
    console.log(e);
    const valeur = e.target.dataset.kkey
    calculer(valeur);
})

//Error case 
window.addEventListener('error', (e) =>{
    alert("erreur : " + e.message);
})

//Calcule de la calculatrice
const calculer = (valeur) => 
{
    if(listKeyCode.includes(valeur)){
        switch(valeur)
        {
            //when click on C or press down on '<-' touch delete all data
            case '8' :
                ecran.textContent = "";
                break;

            //When click or press down on '=' touch, eval operation and show result
            case "13": 
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;

                //In others cases update screen information
            default : 
                const indexKeyCode = listKeyCode.indexOf(valeur);
                const a_touch = touches[indexKeyCode];
                ecran.textContent += a_touch.innerHTML;
        }
    }
}