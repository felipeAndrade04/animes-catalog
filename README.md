<h1 align="center">
  Anime Catalog
</h1>

<h1 align="center">
<img src="https://ik.imagekit.io/lzkiso6iri/READMEs/catalog%20anime/Screenshot%202023-07-30%20at%2021.23.01_Ipvgf5nmF.png?updatedAt=1690763084260">
  <img src="https://ik.imagekit.io/lzkiso6iri/READMEs/catalog%20anime/Screenshot%202023-07-30%20at%2021.24.30_y09j4Hysi.png?updatedAt=1690763084291">
</h1>

## Indice

- [Indice](#indice)
- [🔖 Sobre](#-sobre)
- [🚀 Funcionalidades](#-funcionalidades)
- [👩🏻‍💻 Tecnologias](#-tecnologias)
- [🗂 Como baixar e executar o projeto](#-como-baixar-e-executar-o-projeto)

---

## 🔖 Sobre

O **Anime Catalog** é uma aplicação de catálogo de animes, desenvolvida com o intuito de consumir e explorar informações de animes e aplicar boas práticas de código e experiência do usuário. A aplicação possui uma tela inicial que lista os animes animes em destaque e também alguns animes por categoria. Ela também possui uma tela de detalhe que trás mais informações sobre o anime e é possível assistir o trailer do anime.

Para o gerenciamento do projeto utilizei o github project, lá centralizei as tarefas que precisavam ser desenvolvidas e criei branch para cada uma. Segue link do github project: [Link](https://github.com/users/felipeAndrade04/projects/2)

---

## 🚀 Funcionalidades

- Layout responsivo
- Listar animes da API Kitsu
- Tela home para exibição dos animes
- Tela de detalhes dos animes
- Modal pra reprodução do trailer
- Padronização de código utilizando ESlint e Prettier
- Padronização de commits utilizando Husky

Para o desenvolvimento da página de detalhes optei o usar o SSG(Static Site Generation) porque como as informações do animes não tendem a mudar com frequência, servir a página estática vai ajudar na performance e experiência do usuário. O cache está configurado para 1 dia.

---

## 👩🏻‍💻 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Ant. Design](https://ant.design./)
- [Less](https://lesscss.org/)
- [Vercel](https://vercel.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Husky](https://typicode.github.io/husky/#/)
- [API Kitsu](https://kitsu.docs.apiary.io/#)
- [VS Code][vscode] with [ESLint][vceslint] and [Prettier][vcprettier]

---

## 🗂 Como baixar e executar o projeto

Para clonar e executar esta aplicação na sua máquina é necessário ter instalado:

- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)

Para configurar a aplicação também é preciso ter:

- Criar arquivo .env.local e adicionar a chave `BASE_URL` com a url da api kitsu: `https://kitsu.io/api/edge`

```bash

  # Clonar o repositório
  $ git clone https://github.com/felipeAndrade04/animes-catalog.git

  # Entrar no diretório
  $ cd animes-catalog

  # Instalar as dependências
  $ yarn install ou npm install

  # Duplicar o arquivo .env.local.example, renomear para .env.local e substituir as informações de acesso no seu devido local.

  # Iniciar o projeto
  $ yarn dev ou npm run dev

```

<br />

Desenvolvido por [Felipe Andrade](https://github.com/felipeAndrade04)

[vscode]: https://code.visualstudio.com/
[vcprettier]: https://prettier.io/
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
