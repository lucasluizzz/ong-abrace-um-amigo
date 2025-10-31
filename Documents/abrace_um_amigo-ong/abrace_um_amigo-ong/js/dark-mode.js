const DARK_MODE_KEY = 'darkModeEnabled';

/**
@param {boolean} isDark
 */
const applyTheme = (isDark) => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');

    if (isDark) {
        body.classList.add('dark-mode');
        if (toggleButton) {
            toggleButton.textContent = '☀️';
            toggleButton.setAttribute('aria-label', 'Alternar para Modo Claro');
        }
    } else {
        body.classList.remove('dark-mode');
        if (toggleButton) {
            toggleButton.textContent = '🌙';
            toggleButton.setAttribute('aria-label', 'Alternar para Modo Escuro');
        }
    }
};

const toggleDarkMode = () => {
    const isDark = document.body.classList.contains('dark-mode');
    const newState = !isDark;
    
    applyTheme(newState);

    localStorage.setItem(DARK_MODE_KEY, newState ? 'enabled' : 'disabled');
};

const initDarkMode = () => {
    const storedPreference = localStorage.getItem(DARK_MODE_KEY);
    
    if (storedPreference === 'enabled') {
        applyTheme(true);
    } else if (storedPreference === 'disabled') {
        applyTheme(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme(true);
        localStorage.setItem(DARK_MODE_KEY, 'enabled');
    }

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
};

document.addEventListener('DOMContentLoaded', initDarkMode);