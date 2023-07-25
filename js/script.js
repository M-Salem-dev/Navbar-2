// window.alert("Hello")    //Test



let nav = document.querySelector('nav');
let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');



window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow', window.scrollY > 0);
});



menu.addEventListener("click", function () {
    menu.classList.toggle('fa-spider');
    navbar.classList.toggle('active');
})














