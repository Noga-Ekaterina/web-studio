const shadow = document.querySelector("#block_shadow");
const formNumber = document.querySelector("#form_number");
const postForm = document.querySelector("#post_form");
const closeSB = shadow.querySelectorAll(".close_shadow");

function submitForm(el) {
    let num = el.num.value;
    const error = el.querySelector(".error");
    const errorText = "Введите номер";

    if (num.length <=2)
        error.innerHTML = errorText;
    else {
        shadow.style.display = "flex";
        postForm.style.display = "block";
        formNumber.style.display = "none";
    }

    return false
}

closeSB.forEach((cl) => {
    cl.addEventListener("click", function () {
        shadow.style.display = "none"
    }, false)
})

function showForm() {
    shadow.style.display = "flex";
    postForm.style.display = "none";
    formNumber.style.display = "block";
}
document.querySelector("#show_form").onclick= showForm