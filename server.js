const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

//Iniciando o DB
mongoose.connect(
    "mongodb://192.168.99.100:27017/nodeapi", 
    { useNewUrlParser: true }
);
requireDir('./src/models');

app.use(express.json());
app.use(cors());
//Rotas API
app.use('/api', require('./src/routes'));

app.listen(3001);