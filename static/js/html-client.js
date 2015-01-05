var socket = io.connect('http://localhost:2222');

socket.on('connect',function(){
	console.log('game agent connected');
	socket.emit('id','game');
});

socket.on('disconnect', function(){
	console.log('opps game agent disconnected');
});

socket.on('move', function(data){
	console.log(data);
	makeMove(data);
});

socket.on('line', function(data){
	winningLine(data.a,data.b,data.c,data.d,data.e);
});

socket.on('winner',function(data){
	set_winner(data);
});
