# DS Deliver

# Sobre o projeto

https://sd2-alex.netlify.app/

DS Deliver é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

O projeto consiste em um sistema de registro e entrega de pedidos. Utilizamos Java com Spring Boot, e implantação no Heroku para a parte backend. No frontend utilizamos React com TypeScript. Na aplicação móvel utilizamos React Native também com TypeScript.

## Layout mobile

![Mobile 1](https://github.com/AlexPauloVieira/dsdeliver-sds2/blob/main/dsdelivermobile.gif)

## Layout web

![Web 1](https://github.com/AlexPauloVieira/dsdeliver-sds2/blob/main/dsdeliverweb.gif)

## Modelo conceitual

![Image](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png)

## Certificado de Participação
![Certificado](https://github.com/AlexPauloVieira/dsdeliver-sds2/blob/main/docs/assets/sds2-certificado.png)

# Tecnologias utilizadas

## Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Postman

## Front end

- HTML / CSS / TypeScript
- ReactJS
- React Native
- Expo

## Implantação em produção

- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql e H2

# Como executar o projeto

## Back end

Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/AlexPauloVieira/dsdeliver-sds2

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web

Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/AlexPauloVieira/dsdeliver-sds2

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install || yarn install

# executar o projeto
npm start || yarn start
```

# Autor

Alex Paulo Tadeu Vieira

https://www.linkedin.com/in/alex-paulo-tadeu-vieira-161b8b202/
