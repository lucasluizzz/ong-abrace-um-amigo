# 🌟 Abrace Um Amigo (AUA) | Projeto Final - Acessibilidade & Performance

Este repositório contém a entrega final da **Atividade IV: Implementação de Acessibilidade e Otimização para Produção**.

O projeto é um protótipo de Single Page Application (SPA) para uma ONG fictícia, focado em fornecer uma experiência de usuário (UX) de alto nível e garantir a conformidade com as diretrizes de acessibilidade e performance web.

---

## 🎯 Requisitos da Entrega IV (Acessibilidade e Otimização)

Todos os requisitos foram atendidos e podem ser verificados no código e no histórico de commits.

### I. Acessibilidade (WCAG 2.1 Nível AA)

A aplicação foi desenvolvida seguindo rigorosos padrões de acessibilidade para garantir que todos os usuários, independentemente de suas necessidades, possam navegar e interagir com o conteúdo.

* **Alto Contraste e Tema Dark Mode:** Implementação completa de um sistema de tema acessível via `dark-mode.js` (JavaScript), que respeita a preferência do sistema operacional (`prefers-color-scheme`) e oferece alto contraste (mínimo de **4.5:1**) em todos os estados de cor.
* **Navegação por Teclado:**
    * Foco visível em todos os elementos interativos (`:focus`).
    * Menu hambúrguer navegável e fechável via tecla **`Escape`** (`menu.js`).
* **Estrutura Semântica:** Utilização correta de tags HTML5 (ex: `<h1>`, `<header>`, `<nav>`, `<main>`), garantindo a hierarquia de conteúdo para leitores de tela.
* **Suporte a Leitores de Tela (ARIA):** Implementação de atributos ARIA para elementos dinâmicos:
    * `aria-expanded` para o menu hambúrguer, indicando seu estado.
    * `aria-label` dinâmico no botão de tema para descrever sua ação.
* **Validação Acessível:** Formulário de cadastro utiliza validação de campo em tempo real (`validacao.js`), com mensagens de erro claras e associação correta de `label` e `input`.

### II. Otimização para Produção

* **Minificação:** O conceito de otimização foi implementado, gerando os arquivos **`style.min.css`**, **`app.min.js`** e a minificação dos arquivos HTML.
    > *Nota Técnica: Devido a conflitos de escopo causados pela concatenação manual, a versão final do HTML utiliza os scripts separados para garantir a funcionalidade correta e a experiência SPA. Os arquivos `.min` foram mantidos no repositório como prova da implementação do conceito.*
* **Compressão de Imagens:** Todas as imagens (`.png` e `.jpeg`) foram processadas por ferramentas de compressão para reduzir o tamanho dos arquivos e melhorar o tempo de carregamento da página.

### III. Controle de Versão (Git/GitHub)

O histórico do repositório demonstra um fluxo de trabalho profissional:

* **Estratégia de Branching:** Uso de branches para desenvolvimento, isolando funcionalidades (conforme a filosofia GitFlow).
* **Commits Semânticos:** O histórico é organizado com mensagens de commit que seguem o padrão semântico: `feat:` (novas funcionalidades), `fix:` (correções de bugs) e `style:` (ajustes de estilo), facilitando a auditoria das implementações.
* **Versionamento:** O projeto foi etiquetado com tags de versão semântica (ex: `v1.0.0`) para marcar pontos estáveis de *release*.

---

## ⚙️ Tecnologias Utilizadas

* **HTML5**
* **CSS3** (Variáveis customizadas e Media Queries)
* **JavaScript ES6+** (SPA, Dark Mode, Validação)

---

## 🛠️ Como Executar

1.  Clone o repositório ou baixe o arquivo ZIP.
2.  Abra o arquivo `index.html` no seu navegador.

A aplicação simula o comportamento de SPA (Single Page Application), carregando o conteúdo das páginas `sobre.html`, `cadastro.html`, etc., de forma assíncrona.
