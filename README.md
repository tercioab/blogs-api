# Projeto Blogs API

Esse projeto é uma API RESTful para um sistema de blogs. Ele foi construído usando Node.js e Express, e utiliza um banco de dados MySQL para armazenar informações sobre usuários, categorias de postagens e postagens propriamente ditas.

## Instalação

Para instalar e executar esse projeto, você precisará ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados em sua máquina.

1. Clone o repositório para sua máquina local: 

```
git clone git@github.com:tercioab/blogs-api.git
```


2. Entre na pasta do projeto: 

```
cd blogs-api
```

3. construa e inicie os contêineres. 

```
docker-compose up
```

4. Entre no container 

```
docker exec -it blogs_api bash

```
5. Instale as dependencias

```
npm install
```

6. crie o bango e gere as tabelas

```
npm run prestart
```

7. Popule a tabela

```
npm run seed
```

### A API estará disponível em `http://localhost:3000`.

## Rotas

A seguir estão listadas as rotas disponíveis na API:

- `POST /login`: autentica um usuário e retorna um token JWT.
- `GET /user`: retorna informações sobre um usuário autenticado.
- `GET /categories`: retorna uma lista de categorias de postagens.
- `POST /categories`: cria uma nova categoria de postagens.
- `GET /post`: retorna uma lista de postagens.
- `POST /post`: cria uma nova postagem.
- `GET /post/:id`: retorna uma postagem específica pelo seu ID.
- `PUT /post/:id`: atualiza uma postagem existente.
- `DELETE /post/:id`: exclui uma postagem existente.

## Configuração

As configurações da aplicação, como as credenciais do banco de dados e o segredo JWT, podem ser encontradas no arquivo `docker-compose.yml`. Certifique-se de que essas configurações estejam de acordo com o seu ambiente antes de iniciar os contêineres.

## Contribuição

Este projeto é aberto a contribuições. Se você encontrar algum bug ou tiver ideias para novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.
