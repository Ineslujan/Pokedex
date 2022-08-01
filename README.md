# Pokedex

This server side website is a pokedex. Do you know it ?

A pokedex, is a kind of dictionary contains all the Pokemons (small fictive and cute creatures). 
These Pokemons can fight and have statistics. Each Pokemon has one or two types like plant, rock, fire, etc...

The home page can be filtered with the menu "Types".
List show all the Pokemons
You can show the details of the Pokemon with its type and statistics

The website is entirely responsive. Try it !

## Main technology & concept

- NodeJS
- Express
- EJS
- NPM
- PostgreSQL
- HTML
- CSS
- SQL join
- router
- SQL

## How to see the project

Direct link : In the "About" section on the right

## How to run

### <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="drawing" height="17"/> PostgreSQL <sub><em>(or your favorite SGBD)</em></sub>

<details>
<summary>Installer...
</summary>
- Download installer :
    - https://www.postgresql.org/download/

- CLI Ubuntu
    - https://www.postgresql.org/download/linux/ubuntu/

</details>

- Create database with postgreSQL

```cmd
CREATE DATABASE <dbname> OWNER <user>;
```

- Create tables and datas with the "pokedex.sql" in data folder

```cmd
psql -U <user> -d <dbname> -f data/pokedex.sql
```

### 🗳 Environment variable

- Create `.env` following the `.env.example`

### <img src="https://nodejs.org/static/images/favicons/favicon.ico" alt="drawing" height="17"/> The project runs with Node.js

<details>
<summary>Installer...
</summary>

- Download installer :
    - https://nodejs.org/en/

- CLI Ubuntu
```cmd
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```
```cmd
sudo apt-get install -y nodejs
```
</details>

### <img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" alt="drawing" height="17"/> Project dependancies installation
```cmd
npm i
```

Launch on Production mode
```cmd
npm start
```

<u>Included Packages :</u>
- dotenv
- ejs
- express
- express-session
- nodemon
- pg

### 👀 Enjoy the website
    
```
http://localhost:PORT
```
