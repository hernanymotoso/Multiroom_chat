/* 1°  Importar as configurações do servidor  */
var app = require('./config/server');

/* 2° Parametrizar a porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor online')
});

var io = require('socket.io').listen(server);
/* Parametrizando a var io como var global */
app.set('io', io);

/* Criar a conexão por websocket */
io.on('connection', function(socket){

     
    
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou ')
    });
});