let trigger = document.querySelectorAll('.trigger');
let menu = document.querySelector('.mobile-menu');

trigger.forEach(link =>{
    link.addEventListener('click', function(){
        menu.classList.toggle('active')
    })
})



















