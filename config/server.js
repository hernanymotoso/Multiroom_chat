/* 1° Importar o módulo do framework express */
var express = require('express');

/* 2° Importar o modulo do consign */
var consign = require('consign');

/* 3° Importar o modulo do body-parser */
var bodyParser = require('body-parser');

/* 4° Importar o modulo do express-validator  */
var expressValidator = require('express-validator');

/* 5° Iniciar o objeto do express  */
var app = express();

/* 7° Setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* 8° Configurar o middleware express.static */
app.use(express.static('./app/public'));

/* 9° Configurar o mmiddleware body-parser  */
app.use(bodyParser.urlencoded({extended: true}));

/* 10° Configurar o middleware express-validator */
app.use(expressValidator());

/* 11° Configurar o consign.   Efetua o autoload das rotas. dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);


/* 6° Exportar o objeto app */
module.exports = app;