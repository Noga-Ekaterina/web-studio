document.addEventListener('DOMContentLoaded', () => {
    gotoNum(current)
});

const buttonsForm= document.querySelector("#buttons");
const btnNextRed = document.querySelector("#block_form>button");
const h1_p= document.querySelector("h1+p");
const hideElements = () => {
    if(current!=0)
        h1_p.style.display="none";
    else
        h1_p.style.display="";
    
    if (current == 2) {
        btnNext.style.opacity = "0";
        btnNext.style.zIndex= "-1";
        btnPrev.style.opacity = "0";
        btnPrev.style.zIndex= "-1";
    }
    if (current == 3) {
        buttonsForm.style.opacity = "0";
        buttonsForm.style.zIndex= "-1";
        btnNextRed.style.display = "none"
    }
}
btnNext.addEventListener("click", (event) => {
    gotoNext();
    hideElements()
});
btnNextRed.addEventListener("click", (event) => {
    gotoNext();
    hideElements()
});
btnPrev.addEventListener("click", (event) => {
    gotoPrev();
    hideElements()
});
