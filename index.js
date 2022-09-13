const express = require('express');
const {getConnection} = require ('./DB/conexion-mongo');

const app = express();
const port = 3000;

getConnection();
//Parseo json
app.use(express.json());

app.use('/Usuario', require('./models/router/usuario'));
app.use('/estadoEquipo', require('./models/router/estadoEquipo'));
app.use('/marca', require('./models/router/marca'));
app.use('/tipoEquipo', require('./models/router/tipoEquipo'));
//app.use('/inventario', require('./models/router/inventario'));
 app.listen(port, () => {
    console.log('Example app listening on port ${port}')
 });