const menu = document.querySelector('#navbar_menu');
const togglebtn = document.querySelector('#navbar_togglebtn');

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});