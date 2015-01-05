var bigBoard = [0,0,0,0,0,0,0,0,0];
var Board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var currentPlayer = 1;
var client;
var gameDone;
var currentBoard = 9;

function pMove(string,board,position,player) {
	this.string = string;
	this.board = board;
	this.position = position;
	this.player = player;
}

function wLine(a,b,c,d,e){
	this.a=a; //space 1
	this.b=b; //space 2
	this.c=c; //space 3
	this.d=d; //winning player
	this.e=e; //winning board
}

function isValid(move) {
	if (Board[move.board][move.position%9] !== 0){
		console.log("invalid move: " + move.position);
		client.emit('invalidMove',move);
	}
	else if (move.player !== currentPlayer){
		console.log("wrong player");
		client.emit('invalidMove',move);
	}
	else if(currentBoard !== move.board){
		if(currentBoard !== 9){
			console.log("invalid Move: " + move);
			client.emit('invalidMove', move);
		}
		else{
			console.log("valid move: " + move.position);
			makeMove(move);
		}
	}
	else{
		console.log("valid move: " + move.position);
		makeMove(move);
	}
}

function hasMove(b){
	var board = Board[b];
	for(var i = 0; i < 9; i ++){
		if(board[i] === 0){
			return true;
		}
	}
	return false;
}

function makeMove(move){
	if(gameDone){}
	else{
		Board[move.board][move.position%9] = currentPlayer;

		if (currentPlayer === 1){
			currentPlayer = 2;
		}
		else{
			currentPlayer = 1;
		}
		client.emit('move',move);
		if (hasMove(move.position % 9)){
			currentBoard = move.position % 9;
		}
		else{
			currentBoard = 9;
		}

		checkWinner();
	}
}

function checkWinner() {
	for(var i = 0; i < 9; i++){
		var board = Board[i];
		if(board[0] === board[1] && board[1] === board[2] && board[0] !== 0){
			if(board[0] === 1){
				winningLine(0,1,2,1,i);
			}
			else{
				winningLine(0,1,2,2,i);
			}
		}
		else if(board[3] === board[4] && board[4] === board[5] && board[3] !== 0){
			if(board[3] === 1){
				winningLine(3,4,5,1,i);
			}
			else{
				winningLine(3,4,5,2,i);
			}
		}
		else if(board[6] === board[7] && board[7] === board[8] && board[6] !== 0){
			if(board[6] === 1){
				winningLine(6,7,8,1,i);
			}
			else{
				winningLine(6,7,8,2,i);
			}
		}
		else if(board[0] === board[3] && board[3] === board[6] && board[0] !== 0){
			if(board[0] === 1){
				winningLine(0,3,6,1,i);
			}
			else{
				winningLine(0,3,6,2,i);
			}
		}
		else if(board[1] === board[4] && board[4] === board[7] && board[1] !== 0){
			if(board[1] === 1){
				winningLine(1,4,7,1,i);
			}
			else{
				winningLine(1,4,7,2,i);
			}
		}
		else if(board[2] === board[5] && board[5] === board[8] && board[2] !== 0){
			if(board[2] === 1){
				winningLine(2,5,8,1,i);
			}
			else{
				winningLine(2,5,8,2,i);
			}
		}
		else if(board[0] === board[4] && board[4] === board[8] && board[0] !== 0){
			if(board[0] === 1){
				winningLine(0,4,8,1,i);
			}
			else{
				winningLine(0,4,8,2,i);
			}
		}
		else if(board[2] === board[4] && board[4] === board[6] && board[2] !== 0){
			if(board[2] === 1){
				winningLine(2,4,6,1,i);
			}
			else{
				winningLine(2,4,6,2,i);
			}
		}
	}
}

function checkWinnerOverall(){
	if(bigBoard[0] === bigBoard[1] && bigBoard[1] === bigBoard[2] && bigBoard[0] !== 0){
		if(bigBoard[0] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[3] === bigBoard[4] && bigBoard[4] === bigBoard[5] && bigBoard[3] !== 0){
		if(bigBoard[3] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[6] === bigBoard[7] && bigBoard[7] === bigBoard[8] && bigBoard[6] !== 0){
		if(bigBoard[6] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[0] === bigBoard[3] && bigBoard[3] === bigBoard[6] && bigBoard[0] !== 0){
		if(bigBoard[0] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[1] === bigBoard[4] && bigBoard[4] === bigBoard[7] && bigBoard[1] !== 0){
		if(bigBoard[1] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[2] === bigBoard[5] && bigBoard[5] === bigBoard[8] && bigBoard[2] !== 0){
		if(bigBoard[2] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[0] === bigBoard[4] && bigBoard[4] === bigBoard[8] && bigBoard[0] !== 0){
		if(bigBoard[0] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
	else if(bigBoard[2] === bigBoard[4] && bigBoard[4] === bigBoard[6] && bigBoard[2] !== 0){
		if(bigBoard[2] === 1){
			gameOver(1);
		}
		else{
			gameOver(2);
		}
	}
}

function winningLine(a,b,c,p,board){
	if (bigBoard[board] === 0){
		a = a + 9 * board;
		b = b + 9 * board;
		c = c + 9 * board;
		var data = new wLine(a,b,c,p,board);
		client.emit("line",data);
		bigBoard[board] = p;
		checkWinnerOverall();
		console.log(bigBoard);
	}
}

function gameOver(player){
	client.emit("winner",player);
	console.log("game over");
	gameDone = true;
}

function Greset(){
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
			Board[i][j] = 0;
		}
	}
	for(i = 0; i < 9; i++){
		bigBoard[i] = 0;
	}
	currentPlayer = 1;
	currentBoard = 9;
	gameDone = false;
}

module.exports = {
	winningLine : function(a,b,c,p){
		winningLine(a,b,c,p);
	},
	checkWinner : function(){
		checkWinner();
	},
	isValid : function(x){
		isValid(x);
	},
	getClient : function(x){
		client = x;
	},
	Greset : function(){
		Greset();
	}
}
