const express = require('express');
const app = express();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const {database} = require('./keys');

let sessionStore = new MySQLStore(database);
app.use(session({
    secret: 'tls',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

app.use(express.json());

app.use(require('./rutas/index'));

app.listen(3000, () => {
    console.log("Server en el puerto 3000");
})