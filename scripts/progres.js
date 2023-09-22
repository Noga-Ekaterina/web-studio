const animationProgres = () => {
    const position = ["-87.5%", "-75%", "-62.5%", "-50%", "-37.5%", "-25%", "-12.5%", "0"];
    document.querySelector("#line_progres div").style.left = position[current];
}
document.addEventListener('DOMContentLoaded', () => {
    gotoNum(current);
    animationProgres();
});

btnNext.addEventListener("click", (event) => {
    gotoNext();
    animationProgres()
});
btnPrev.addEventListener("click", (event) => {
    gotoPrev();
    animationProgres()
});
