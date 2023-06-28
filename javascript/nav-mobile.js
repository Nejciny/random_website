
const nav_btn = document.getElementById('nav-icon3');
const links = document.getElementById('links');

nav_btn.addEventListener('click', function(){
    nav_btn.classList.toggle('open');
    links.classList.toggle('open');


})
