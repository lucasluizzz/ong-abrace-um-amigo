const postsData = [
    {
        id: 1,
        titulo: "Sucesso! Cão Scooby Encontra Seu Lar Final",
        data: "2025-10-15",
        autor: "Equipe AUA",
        imagemSrc: "img/destaque_scooby.jpeg",
        imagemAlt: "Família adotando o cão Scooby.",
        resumo: "Após 8 meses de recuperação, Scooby, um cão de porte médio, foi finalmente adotado no último sábado por uma família maravilhosa. Veja a história completa e inspire-se.",
        categoria: "Adoção",
    },
    {
        id: 2,
        titulo: "Campanha de Inverno: Doe Ração e Aqueça Uma Vida",
        data: "2025-10-13",
        autor: "Comunicação",
        imagemSrc: "img/doacao_racao.jpeg",
        imagemAlt: "Sacos de ração doados em um centro de distribuição.",
        resumo: "Com a chegada dos meses frios, a necessidade de ração e cobertores aumenta drasticamente. Ajude nossos 300 animais a passarem o inverno com dignidade.",
        categoria: "Campanha",
    },
    {
        id: 3,
        titulo: "Dicas de Ouro: Como Preparar Sua Casa para um Gato Adotado",
        data: "2025-08-10",
        autor: "Lucas Luiz",
        imagemSrc: "img/dicas_gato.jpeg",
        imagemAlt: "Gato deitado confortavelmente em uma casa.",
        resumo: "Adotar um gato é maravilhoso, mas a preparação é a chave para uma adaptação tranquila. Cobrimos desde a caixa de areia ideal até os melhores brinquedos.",
        categoria: "Dicas",
    }
];

const postTemplate = (post) => {
    return `
        <article class="card blog-post-card">
            <figure>
                <img src="${post.imagemSrc}" alt="${post.imagemAlt}" loading="lazy">
            </figure>
            <div class="card-body">
                <span class="badge badge-primario">${post.categoria}</span>
                <h3>${post.titulo}</h3>
                <p><small>Publicado em: <time datetime="${post.data}">${new Date(post.data).toLocaleDateString('pt-BR')}</time> | Por: ${post.autor}</small></p>
                <p>${post.resumo}</p>
                <a href="#post-${post.id}" class="btn-acao">Leia o Post Completo</a>
            </div>
        </article>
    `;
};

const renderizarDestaques = () => {
    const container = document.getElementById('destaquesHome'); // Usa o novo ID
    if (!container) return;
    
    const destaques = postsData.slice(0, 3); 
    const htmlDestaques = destaques.map(post => postTemplate(post)).join('');
    
    container.innerHTML = htmlDestaques;
};

const renderizarBlog = () => {
    const container = document.getElementById('postsContainer');
    if (!container) return; 
    
    const htmlPosts = postsData.map(post => postTemplate(post)).join('');
    container.innerHTML = htmlPosts;
};

const renderizarPosts = () => {
    const container = document.getElementById('postsContainer');
    
    if (!container) return; 
    
    const htmlPosts = postsData.map(post => postTemplate(post)).join('');
    
    container.innerHTML = htmlPosts;
};

window.renderizarDestaques = renderizarDestaques;
window.renderizarBlog = renderizarBlog;

document.addEventListener('DOMContentLoaded', () => {
    renderizarPosts();
});