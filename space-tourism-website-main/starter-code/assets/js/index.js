const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
let menuOpen = false;

hamburger.addEventListener('click', () =>{
    if(!menuOpen){
        hamburger.classList.add('open');
        navbar.classList.add('display');
        menuOpen = true;
    }
    else{
        hamburger.classList.remove('open');
        navbar.classList.remove('display');
        menuOpen = false;
    }
})

