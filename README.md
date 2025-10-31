# Abrace Um Amigo (AUA) 🐾 - Single Page Application

## 🌟 Visão Geral do Projeto

Abrace Um Amigo (AUA) é um projeto web desenvolvido como uma **Single Page Application (SPA)** utilizando HTML, CSS e JavaScript puro. O objetivo principal é criar uma plataforma funcional e totalmente acessível para uma Organização Não Governamental (ONG) fictícia, promovendo a adoção de animais, campanhas de doação e conscientização.

Este projeto consolida conhecimentos em arquitetura web, programação JavaScript modular, versionamento profissional (GitFlow/Commits Semânticos) e, principalmente, **Acessibilidade Web (WCAG 2.1 Nível AA)**.

### 🔗 Acesse a Aplicação

O projeto final está publicado e disponível para acesso:

[Visite a Abrace Um Amigo (AUA)](<LINK DO DEPLOY>) 

***
## 🛠️ Especificações Técnicas e Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias e seguindo rigorosas práticas de engenharia de software.

### Tecnologias Utilizadas

| Categoria | Tecnologia | Notas |
| :--- | :--- | :--- |
| **Linguagens** | HTML5, CSS3, JavaScript (Vanilla JS) | Uso de JavaScript puro para manipulação do DOM. |
| **Estilização** | CSS Puro + Variáveis CSS | Implementação de um Design System através de variáveis CSS. |
| **Arquitetura** | Single Page Application (SPA) | Navegação dinâmica entre as 8 páginas HTML sem recarregar a página principal. |

### Versionamento e Colaboração (Entrega IV)

A gestão do código segue a metodologia **GitFlow** para branches e **Conventional Commits** para o histórico, garantindo um processo de desenvolvimento rastreável e organizado.

* **Estratégia de Branching:** Uso de branches `main` (produção), `develop` (integração) e *feature branches* (ex: `feature/acessibilidade-wcag`).
* **Versionamento Semântico:** Releases marcados com `git tag` no formato `vMAJOR.MINOR.PATCH`.
* **Commits Semânticos Utilizados:** `feat:`, `fix:`, `perf:`, `refactor:`, `docs:`.

***
## ♿ Acessibilidade e Conformidade (WCAG 2.1 Nível AA)

O projeto foi rigorosamente otimizado para atingir o nível AA das Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1).

| Requisito WCAG | Implementação | Prova no Código |
| :--- | :--- | :--- |
| **Navegação por Teclado** | Foco visível (`:focus`) em todos os elementos. Menu pode ser fechado pela tecla `ESC` (`menu.js`). | `main.css` / `menu.js` |
| **Estrutura Semântica** | Uso de tags HTML5 como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, e atributos `<label>` associados a `<input>`. | `index.html` / `_components.css` |
| **Contraste Mínimo (4.5:1)** | Todas as combinações de texto/fundo (padrão e Dark Mode) foram verificadas para atender ao contraste. | Variáveis em `_design-system.css` |
| **Leitores de Tela (ARIA)** | O botão do Menu Hambúrguer usa `aria-expanded` e `aria-controls`. O botão de alternância de tema usa `aria-label`. | `index.html` / `menu.js` / `dark-mode.js` |
| **Alto Contraste / Modo Escuro** | Implementação de um **Modo Escuro Acessível**, que pode ser ativado manualmente ou via preferência do sistema (`prefers-color-scheme`). | `dark-mode.js` / `main.css` |

***
## 🚀 Otimização e Deploy (Entrega IV)

Para garantir o desempenho em ambiente de produção, foram aplicadas otimizações no front-end:

| Otimização | Detalhe da Implementação |
| :--- | :--- |
| **Minificação** | (A ser feita manualmente ou via ferramenta de *build*). Arquivos CSS, JavaScript e HTML devem ser minificados antes do deploy final. |
| **Compressão de Imagens** | Todas as imagens estáticas foram otimizadas, reduzindo o tamanho do bundle e melhorando o tempo de carregamento inicial. |
| **Carregamento Dinâmico** | O sistema SPA garante que apenas o conteúdo `<main>` de cada página é buscado via `fetch`, reduzindo o tráfego de dados após o carregamento inicial. |

### Instruções de Deploy

1.  **Configuração:** Certifique-se de que a raiz do deploy aponta para o `index.html`.
2.  **Tecnologia:** O projeto é estático e pode ser facilmente hospedado em plataformas como **GitHub Pages, Netlify ou Vercel**.
3.  **URL Base:** Devido ao roteamento SPA, a URL base deve ser a raiz do domínio para que a navegação `loadContent(path)` funcione corretamente.

***
## ⚙️ Como Executar o Projeto Localmente

Para clonar e executar este projeto em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://www.youtube.com/watch?v=X49Wz3icO3E](https://www.youtube.com/watch?v=X49Wz3icO3E)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-do-seu-repositorio
    ```
3.  **Execute:**
    Abra o arquivo `index.html` em seu navegador.
    *Recomendação: Para simular corretamente o ambiente de deploy e evitar problemas de CORS/roteamento da SPA, utilize a extensão **Live Server** (VS Code) ou um servidor local similar.*
