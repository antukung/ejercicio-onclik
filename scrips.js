const parrafo1= document.querySelector ("#contador")

let clickContador= 0;

function clicDeContador() {
    parrafo1.innerHTML= ++clickContador;
}

function clicDelReseteo() {
    clickContador=0
    parrafo1.innerHTML=clickContador;
}

function clickDeLaResta() {
    if (clickContador>0){
    clickContador= clickContador-1;
    parrafo1.innerHTML= clickContador;
    }
    else {
        alert ("no podemos hacer la operacion!!");
    }
}