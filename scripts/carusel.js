const slides = document.querySelectorAll(".slide");
const btnPrev= document.querySelector(".btn_carusel_prev");
const btnNext= document.querySelector(".btn_carusel_next");

let current = 0;
let prev;
let next;


const gotoPrev = () => gotoNum(current - 1);

const gotoNext = () =>  gotoNum(current +1);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == slides.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = slides.length - 1;
    }
    console.log("p" + prev + ", c"+current+", n" + next);

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");

    if(current<=0)
        btnPrev.setAttribute("disabled", "true");
    else
        btnPrev.removeAttribute("disabled");
    
    if(current>=slides.length-1)
        btnNext.setAttribute("disabled", "true");
    else
        btnNext.removeAttribute("disabled");
    let num = current + 1;

    document.querySelector("#num_active").innerHTML = "0" + num
}
