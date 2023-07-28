# API REST de Livros com Express

Esta é uma API REST de livros desenvolvida com Express.js, projetada para fornecer uma plataforma simples e eficiente para gerenciar informações de livros. O projeto é ideal tanto para revisitar os conceitos fundamentais do desenvolvimento de APIs como para explorar boas práticas de arquitetura de software.

## Funcionalidades Principais

-   Listagem, criação, atualização e exclusão de livros.
-   Endpoints para consulta de livros por título, autor, gênero.
-   Utilização de métodos HTTP padrão para interação com a API (GET, POST, PUT, DELETE).

## Arquitetura e Ferramentas

O projeto segue uma arquitetura bem estruturada e organizada, utilizando boas práticas de desenvolvimento e design. Algumas das ferramentas e práticas utilizadas incluem:

### ESLint e Prettier

-   Utilizamos o ESLint em conjunto com o Prettier para manter um código limpo, consistente e com estilo padronizado. O ESLint nos ajuda a encontrar problemas no código e a seguir as regras de estilo definidas para o projeto, enquanto o Prettier garante a formatação consistente do código.
-   Configuramos o ESLint e o Prettier para trabalharem em harmonia, evitando conflitos entre as regras e garantindo uma experiência de desenvolvimento mais suave.

### EditorConfig

-   Utilizamos o EditorConfig para garantir a consistência das configurações do editor de código entre diferentes desenvolvedores e IDEs. O EditorConfig define regras como indentação, estilo de quebra de linha, entre outras configurações, para que todos os desenvolvedores trabalhem em um ambiente de desenvolvimento coerente.

### Husky

-   Utilizamos o Husky para configurar hooks do Git e executar scripts personalizados antes de eventos específicos, como o commit. Isso nos ajuda a garantir que os commits atendam a determinados critérios, como passar em testes ou seguir regras de estilo, antes de serem enviados ao repositório.
