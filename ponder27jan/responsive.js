var menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
console.log(menubtn);
console.log(menu);


menubtn.addEventListener("click", toggleMenu);




function toggleMenu (){ 
    menu.classList.toggle("hide");
    menubtn.classList.toggle("change");
}