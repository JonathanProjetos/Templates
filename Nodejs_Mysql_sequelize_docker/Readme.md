# Boilerplate NodeJS-Mysql
Este é um boilerplate para um projeto de back-end usando as seguintes stacks:

- Docker
- Node.js
- Express
- Joi
- Nodemon
- Express-Async-Errors
- Sequelize
- MySQL
- CORS
- Bcrypt.js
- JsonWebToken
- Swagger

## Pré-requisitos

- Docker
- Node.js
- MySQL

## Instalação

1. Clone este repositório:

   ```
   git clone git@github.com:JonathanProjetos/Templates.git
   ```

2. Entre no diretório do projeto que deseja:

   ```
   cd pasta do projeto
   
   ```

3. Configure as variáveis de ambiente:

  Existe um arquivo `.env.example` na raiz do projeto que já inclui todas as variáveis de ambiente necessárias para o      funcionamento da aplicação.

   ```
   MYSQL_USER=<nome_do_usuario_do_banco_de_dados>
   MYSQL_PASSWORD=<senha_do_usuario_do_banco_de_dados>
   MYSQL_DATABASE=<nome_do_banco_de_dados>
   HOST=<host_do_banco_de_dados>
   MYSQL_PORT=<porta_do_banco_de_dados>
   API_PORT=<porta_da_api>
   JWT_SECRET=<senha_para_decode_do_jsonWebToken>

   ```

4. Execute o servidor:

   ```
   docker-compose up -d

   ```
5. Comandos auxiliares
   - Execute docker exec -it back_end bash para acessar o container e roda os comandos: 
  ```
   npm run db-migrate => cria o banco é roda as migrations.
   npm db-drop => dropa o banco de dados.
   npm db-seed => executa todas as seeders.

  ```
## Documentação

- Esta aplicação conta com uma documentação interna utilizando o Swagger. O endpoint para acesso é `/docs`.

## Uso

Este boilerplate inclui uma API básica de exemplo que pode ser usada como ponto de partida para construir seu próprio projeto.

O arquivo principal da aplicação é `app.js`, que configura e inicia o servidor Express.

O modelo de dados de exemplo está definido no arquivo `models/User.js`, que usa o Sequelize para se comunicar com o banco de dados MySQL.

O arquivo `routes/loginRouter.js` define a rota login, que responde a requisição HTTP com as ações correspondentes.

O arquivo `middlewares/encrypt.js` oferece uma função para encriptar senhas.

O arquivo `middlewares/token.js` define a criação é validação do token.

O arquivo `middlewares/tokenValidation.js` recebe o token via header/authorization, decodifica o conteúdo do token e o adiciona em uma chave criada dentro do objeto request do Express com o nome "email".

O arquivo `middlewares/joiBodyUser.js` recebe os dados via body para a validação dos dados.

O arquivo `app.js` possui um middleware de error, que capitura todos os erros lançados no padrão "status|message".

## Contribuindo

Este boilerplate é uma base inicial que pode ser facilmente expandida e personalizada para atender às necessidades do seu projeto. Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para criar uma issue ou um pull request.
