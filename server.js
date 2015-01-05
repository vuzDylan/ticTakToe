var io = require('socket.io')();
var game = require('./ticTakToe/game-server.js');
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/static'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000);

io.on('connection',function(socket){
	console.log('web connected');
	game.getClient(socket);

	socket.on('move',function(move){
		game.isValid(move);
	});
	
	socket.on('reset',function(){
		game.Greset();
	});
});

io.listen(2222);