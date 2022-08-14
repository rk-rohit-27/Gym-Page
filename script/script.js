burger = document.querySelector(".burger")
nav = document.querySelector(".nav")
navList = document.querySelector('.nav-list')
rightnav = document.querySelector(".rightnav")

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle("v-class-resp");
    navList.classList.toggle("v-class-resp");
    nav.classList.toggle("h-nav-resp");
})

