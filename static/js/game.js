var player = 1;

function humanMove(el) {
	var position = el.id;
	var board = Math.floor(position/9);
	var string = position.toString();
	var move = new pMove(string,board,position,player);
	console.log(move);
	socket.emit('move',move);
}

function makeMove(move) {
	var el = document.getElementById(move.string);

	if (player===1){
		el.innerHTML = "X";
		player = 2;
	}else{
		el.innerHTML = "O";
		player = 1;
	}
	updatePlayer();
}

function set_winner(winner){
	document.getElementById("active").childNodes[0].innerHTML = "Player " + winner + " wins!";
}


function updatePlayer(){
	var el = document.getElementById("active");
	el.childNodes[0].innerHTML = "Player " + player + "'s Turn";
}

function winningLine(a,b,c,p,board){
	if(p === 1){
		document.getElementById(a.toString()).style.background = '#FF0000';
		document.getElementById(b.toString()).style.background = '#FF0000';
		document.getElementById(c.toString()).style.background = '#FF0000';
		document.getElementById("board"+board).style.background = '#FF0000';
	}
	else{
		document.getElementById(a.toString()).style.background = '#0000FF';
		document.getElementById(b.toString()).style.background = '#0000FF';
		document.getElementById(c.toString()).style.background = '#0000FF';
		document.getElementById("board"+board).style.background = '#0000FF';
	}
}

function reset() {
	for(var i = 0; i < 81; i++) {
		document.getElementById(i.toString()).innerHTML = "";
		document.getElementById(i.toString()).style.background = '';
	}
	for(var j = 0; j < 9; j++){
		console.log(j);
		document.getElementById("board"+j).style.background = '';
	}
	player = 1;
	document.getElementById("active").childNodes[0].innerHTML = "Player " + player + "'s Turn";
	socket.emit('reset');
}