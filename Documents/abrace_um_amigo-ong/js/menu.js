const menuButton = document.querySelector('.menu-hamburguer');
const navMenu = document.getElementById('menu-principal');

const toggleMenu = () => {
    navMenu.classList.toggle('ativo');

    const isExpanded = navMenu.classList.contains('ativo');
    menuButton.setAttribute('aria-expanded', isExpanded);
};

document.addEventListener('DOMContentLoaded', () => {
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});

window.closeMenu = () => {
    if (navMenu.classList.contains('ativo')) {
        navMenu.classList.remove('ativo');
        menuButton.setAttribute('aria-expanded', 'false');
    }
};

const handleKeyboard = (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('ativo')) {
        closeMenu();
        menuButton.focus(); 
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
    
    document.addEventListener('keydown', handleKeyboard);
});