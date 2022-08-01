'use strict';

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const session = require('express-session');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT; //! To set up

// app.use((request,response,next) =>{
// 	console.log(`[${new Date().toISOString()} ${request.ip}] ${request.path}`)
//   next();
// });

app.set('views', './app/views');
app.set('view engine', 'ejs');

//! secret à changer pour chaque Projet
app.use(session({
    secret: process.env.SECRET, //! A modifier dans .env
    resave : true, 
    saveUninitialized: true,
		cookie: {
		    // secure: false,
		    // maxAge: (1000 * 60 * 60) // Une heure
		}
}));

//TODO Set the assets/public folder (for CSS, pictures, JS, etc...)
//! Attention aux liens dans les views : doit commencer par / pour repartir de la racine
app.use(express.static('./public'));

router.use((request, response) => {
    response.status(404).render('404');
});

app.use(router);

console.log('PORT: ', process.env.PORT);

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});