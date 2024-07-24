let navbar=document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick=() =>{
    navbar.classList.toggle("active");
    searchtForm.classList.remove("active");
    cartItem.classList.remove("active");

}
let searchtForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick=()=>{
    searchtForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");

}

let cartItem = document.querySelector(".cart-item-container");

document.querySelector("#cart-btn").onclick=()=>{
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchtForm.classList.remove("active");

}

window.onscroll=() =>{
    navbar.classList.remove("active");
    searchtForm.classList.remove("active");
    cartItem.classList.remove("active");

}