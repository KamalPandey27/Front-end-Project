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

