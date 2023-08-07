burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
right = document.querySelector('.right')



burger.addEventListener('click', () => {
    right.classList.toggle('vclass');
    
    nav.classList.toggle('h-nav');
})