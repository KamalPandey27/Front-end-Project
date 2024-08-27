// Add script to navbar  when we scroll the window then the navbar color can change

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
})


// faq 

let faq = document.querySelectorAll('.faq-questions')

Array.from(faq).forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('faq-open')
    })
})

// Slides Testimonial

let testimonial = document.querySelectorAll('.testimonial')
Array.from(testimonial).forEach((e, i) => {
    e.style.left = `${i * 40}%`
})

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let count = 0

prev.addEventListener('click', () => {
    if (count > 0) {
        count--
        Array.from(testimonial).forEach((e) => {
            e.style.transform = `translateX(-${100 * count}%)`
        })
    }
})

next.addEventListener('click', () => {
    if (count < testimonial.length - 2) {
        count++
        Array.from(testimonial).forEach((e) => {
            e.style.transform = `translateX(${-100 * count}%)`
        })
    }
})




