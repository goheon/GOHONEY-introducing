const menu = document.querySelector('#navbar_menu');
const togglebtn = document.querySelector('#navbar_togglebtn');

window.addEventListener("scroll",function(){
    var Yvalue = window.scrollY;
});

togglebtn.addEventListener('click', function(){
    menu.classList.toggle('active');
});

menu.addEventListener('click', function(){
    menu.classList.toggle('active');
});
