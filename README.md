# NLW Expert Node

Este é um projeto backend em Node.js desenvolvido como parte do evento Next Level Week (NLW) Expert.

## Descrição

Este projeto consiste em uma aplicação para criar enquetes com funcionalidades de validação e interação em tempo real.
## Instalação

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, siga os passos abaixo:

- Clone este repositório.

- Navegue até o diretório do projeto.

- Instale as dependências.

- Execute o servidor em modo de desenvolvimento.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Prisma
- Fastify
- ioredis
- Zod

## Descrição das Rotas

Este projeto backend em Node.js oferece as seguintes rotas para interagir com enquetes:
1. `/polls`

- Método: POST
- Descrição: Cria uma nova enquete.
- Corpo da Requisição:
    - question: String (requerido) - A pergunta da enquete.
    - options: Array de Strings (requerido) - As opções disponíveis para a enquete.

2. `/polls/d`

- Método: DELETE
- Descrição: Exclui todas as enquetes.

3. `/polls/:pollId`

- Método: GET
- Descrição: Obtém os detalhes de uma enquete específica.
- Parâmetros da URL:
    - pollId: String (requerido) - O ID único da enquete.

4. `/polls/:pollId/votes`

- Método: POST
- Descrição: Registra um voto em uma enquete específica.
- Parâmetros da URL:
    - pollId: String (requerido) - O ID único da enquete.
- Corpo da Requisição:
    - option: String (requerido) - A opção pela qual o voto está sendo registrado.

## Docker

Você pode executar este projeto usando Docker Compose para criar os contêineres para PostgreSQL e Redis. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Em seguida, siga os passos abaixo:

- Clone este repositório.

- Navegue até o diretório do projeto.

- Execute o Docker Compose para criar os contêineres.

A aplicação estará acessível em http://localhost:3333.
