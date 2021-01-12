const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = Array.from(document.querySelectorAll(".about__img"));
const texts = Array.from(document.querySelectorAll(".about__text"));

let cont = 0;

// El doble ampersan funciona como un if, pregunta si existe prev.
// si prev existe entonces ejecuta lo que está después del ampersan.
// si no existe pues no lo ejecuta.
prev && prev.addEventListener("click", ()=> setClass("prev"));


next && next.addEventListener("click", ()=> setClass("next"));

const setClass = (direction) => {
    images.map(image => image.classList.remove("show"));
    texts.map(text => text.classList.remove("show"));
    setCont(direction);
    images[cont].classList.add("show");
    texts[cont].classList.add("show");
}

const setCont = (direction) => {
    if (direction=="next") {
        cont == images.length-1 ? cont = 0 : cont++;
    } else {
        cont == 0 ? cont = images.length-1 : cont--;
    }
}