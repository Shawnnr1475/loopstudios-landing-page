const menuBtn = document.querySelector(".menu")
const closeMenuBtn = document.querySelector(".menu-close")
const menuContainer = document.querySelector(".menu-content-container")

menuBtn.addEventListener("click",()=>{
    menuContainer.style.animation = "moveIn 0.8s forwards"
})

closeMenuBtn.addEventListener("click",()=>{
    menuContainer.style.animation = "moveOut 0.8s forwards"
})
