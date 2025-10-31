const loadContent = async (url) => {
    const contentArea = document.getElementById('app-content');
    
    if (contentArea) {
        contentArea.classList.add('loading-content');
        contentArea.innerHTML = `
            <div class="loading-spinner">
                <p>Carregando conteúdo...</p>
            </div>
        `;
    }
    
    const pageFile = url === 'index.html' || url === '' ? 'index.html' : url;

    try {
        const response = await fetch(pageFile);

        if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${response.status}`);
        }

        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const mainContent = doc.querySelector('main').innerHTML;
        
        contentArea.innerHTML = mainContent;

        history.pushState(null, '', `/${pageFile.replace('.html', '')}`);
        document.title = doc.title || 'Abrace Um Amigo';

        if (window.setupValidacaoCadastro) {
            window.setupValidacaoCadastro();
            }
        if (window.renderizarPosts) {
            window.renderizarPosts();
            }

        closeMenu(); 

    } catch (error) {
        console.error('Falha ao carregar o conteúdo da SPA:', error);
        contentArea.innerHTML = `
            <div class="container">
                <div class="alert alert-erro">
                    <h2>Erro 404</h2>
                    <p>Não foi possível carregar a página solicitada. Tente novamente mais tarde.</p>
                </div>
            </div>
        `;
    } finally {
        if (contentArea) {
             contentArea.classList.remove('loading-content');
        }
    }
};

const setupNavLinks = () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const path = link.getAttribute('href'); 
            
            loadContent(path); 
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setupNavLinks();
    
    const initialPath = window.location.pathname.replace('/', '') || 'index.html';
    loadContent(initialPath);
});

const pageFile = url === 'index.html' || url === '' ? 'index.html' : url;
const currentPage = pageFile.replace('.html', '');

if (currentPage === 'index' || currentPage === '') {
    if (window.renderizarDestaques) {
        window.renderizarDestaques();
    }
} else if (currentPage === 'blog') {
    if (window.renderizarBlog) {
        window.renderizarBlog();
    }
}