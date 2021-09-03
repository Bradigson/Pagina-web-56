let menuIcon = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle("change");
});

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});