<h1 align="center">Heroku</h1>
<p align="center">
  <img src="./assets/logo.jpeg" width="300" heigth="300">
</p>

<p align="center">
  <img alt="Made by Nadia Ligia" src="https://img.shields.io/badge/made%20by-Nadia%20Ligia-informational">
  
  <a href="license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#book-especificações">Especificações</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## ℹ️ Sobre

Deploy do CRUD no Heroku.

## 📖 Passo a passo

<br>

### 📌 CLI Comandos

- Criação: `heroku create`

- Rnomear: `heroku apps:rename <nome da aplicação>`

### 📌 Passo a passo

- criar a aplicação no heroku
- renomear
- criar arquivo `Procfile` com as configurações para deploy da aplicação
- subir o projeto para o repositório: `git push heroku master`
- criar as variáveis ambiente dentro na plataforma => variável `PORT` será definida pelo própri heroku
- liberar no MongoDB o IP do servidor heroku
- fazer integração Heroku e Github para que o deploy seja automático


<br>

## Licença 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.