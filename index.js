const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY>80);
})
let menu=document.querySelector(".menu");
let nav=document.querySelector(".navList");
menu.onclick=()=>{
    // menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
};
window.onscroll=()=>{
    menu.classList.remove("bx-x");
    nav.classList.remove("open"); 
}

const sr=ScrollReveal({
    origin:"top" ,
    distance:'85px',
    duration:2500,
    reset:true
})
sr.reveal ('.hometext',{delay:300});
sr.reveal ('.home-img',{delay:300});
sr.reveal ('.container',{delay:300});
sr.reveal ('.about-img',{delay:300});
sr.reveal ('.about-text',{delay:300});
sr.reveal ('.shop-content',{delay:300});
sr.reveal ('.row-btn',{delay:300});
sr.reveal ('.section-text',{});
sr.reveal ('.shop',{});
sr.reveal ('.review-content',{delay:300});
sr.reveal ('.contact-images',{delay:300});
sr.reveal ('.contact-text',{delay:300});
sr.reveal ('.social',{delay:300});
sr.reveal ('.details',{delay:300});






