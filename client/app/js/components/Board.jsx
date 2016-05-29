import React from 'react';

class Board extends React.Component {
  constructor() {
    super();
  }

  makeMove(pos) {
    this.props.move(pos);
  }

  render() {
    const squareClasses = this.props.board.map(val => {
      switch(val) {
        case 1:
          return "square player-1";
        case 2: 
          return "square player-2";
        default:
          return "square";
      }
    });

    let boardClass;
    console.log(this.props.won);
    switch(this.props.won) {
      case 1:
        boardClass = "player-1";
        break;
      case 2:
        boardClass = "player-2";
        break;
      default:
        boardClass = "";
        break;
    }
    console.log(boardClass);

    return (
      <div className={"board " + boardClass}>
        <div onClick={this.makeMove.bind(this, 0)} className={squareClasses[0]}></div>
        <div onClick={this.makeMove.bind(this, 1)} className={squareClasses[1]}></div>
        <div onClick={this.makeMove.bind(this, 2)} className={squareClasses[2]}></div>
        <div onClick={this.makeMove.bind(this, 3)} className={squareClasses[3]}></div>
        <div onClick={this.makeMove.bind(this, 4)} className={squareClasses[4]}></div>
        <div onClick={this.makeMove.bind(this, 5)} className={squareClasses[5]}></div>
        <div onClick={this.makeMove.bind(this, 6)} className={squareClasses[6]}></div>
        <div onClick={this.makeMove.bind(this, 7)} className={squareClasses[7]}></div>
        <div onClick={this.makeMove.bind(this, 8)} className={squareClasses[8]}></div>
      </div>
    );
  }
}

export default Board;
