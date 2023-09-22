const menu= document.querySelector("header .menu");
document.querySelector("#open_menu").onclick= function(){
    menu.classList.add("open")
};

document.querySelector("#close_menu").addEventListener( "click", function (){
    menu.classList.remove("open")
}, false)