let navclose = document.querySelector('.navclose')
let hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
    document.querySelector('nav ul').style.display = "flex"
    hamburger.style.display = "none"
    navclose.style.display = "block"
})

navclose.addEventListener('click', () => {
    document.querySelector('nav ul').style.display = "none"
    navclose.style.display = "none"
    hamburger.style.display = "block"
})

