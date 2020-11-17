# MERN-stack-website

## Site dinâmico construído com React + Node.

Utilizando Redux para gerenciamento de state.

Utilizando Multer para upload de imagens.

Autenticação com JWT.

## Para executar essa aplicação:
É necessário criar um arquivo default.json dentro da pasta config contendo o seguinte conteúdo:
```js
{
    "mongoURI": "",
    "jwtSecret": ""
}
```
Onde voce precisará utilizar o mongoDB Atlas e criar um cluster e utilizar seu token no campo mongoURI
E também criar um token qualquer para o campo jwtSecret

Após isso, para executar é necessário apenas inicializar o servidor utilizando:

### `npm run server` 

e acessar a pasta client e inicializar o frontend utilizando:

###  `npm start`

Feito isso, é necessário registrar um usuário para ser capaz de fazer login na área do admin. O backend possui uma rota /admin/register que permite o registro de usuários, essa rota não é acessível do frontend da aplicação (as informações estão no arquivo que se encontra em /routes/admin/login.js)

## O site possui uma tela de login para a área do admin:

<img src="./images_exp/login.jpeg" alt="Image Info" height="400"  />

## Possui a área do admin com CRUDs para inserir informações para serem exibidas na homepage do site

<img src="./images_exp/admin.jpeg" alt="Image Info" height="400"  />

<img src="./images_exp/edit.jpeg" alt="Image Info" height="400"  />

## A homepage do site exibe os dados que estão cadastrados no banco de dados

<img src="./images_exp/home.jpeg" alt="Image Info" height="400"  />
