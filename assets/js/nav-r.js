let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.letras-nave');

menu.onclick = () => {
    navbar.classList.toggle('open');
}