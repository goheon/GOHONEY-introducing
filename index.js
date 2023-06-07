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

const slide = document.querySelector('.cards');
let currentIdx = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const CardWidth = document.querySelector('.cards').offsetWidth/4;

window.addEventListener("resize",function() {const CardWidth=document.querySelector('.cards').offsetWidth/4;})

function moveSlide(num) {
    slide.style.left = -(CardWidth*num) +'px';
    currentIdx=num;
}
prev.addEventListener('click', function(){
    if (currentIdx !== 0) {moveSlide(currentIdx - 1)};
});

next.addEventListener('click', function(){
    if (currentIdx !== 4 - 1) {moveSlide(currentIdx + 1)};
});
