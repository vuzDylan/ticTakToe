import React from 'react';
import Board from './Board';

class BigBoard extends React.Component {
  constructor() {
    super();
  }

  makeMove(board, pos) {
    this.props.move(board, pos);
  }

  render() {
		const styles = {
      width: this.props.size,
      height: this.props.size,
    }
    const classes = [
      "box top left",
      "box top",
      "box top right",
      "box left",
      "box",
      "box right",
      "box bottom left",
      "box bottom",
      "box bottom right",
    ].map( (val, index) => {
      if(this.props.active === 9 || this.props.active === index) {
        return val + " active";
      }
      return val;
    });
    
    return (
      <div className="tic-tak-toe" style={styles}>
        <div className={classes[0]}> <Board won={this.props.won[0]} move={this.makeMove.bind(this, 0)} board={this.props.board[0]} /> </div>
        <div className={classes[1]}> <Board won={this.props.won[1]} move={this.makeMove.bind(this, 1)} board={this.props.board[1]} /> </div>
        <div className={classes[2]}> <Board won={this.props.won[2]} move={this.makeMove.bind(this, 2)} board={this.props.board[2]} /> </div>
        <div className={classes[3]}> <Board won={this.props.won[3]} move={this.makeMove.bind(this, 3)} board={this.props.board[3]} /> </div>
        <div className={classes[4]}> <Board won={this.props.won[4]} move={this.makeMove.bind(this, 4)} board={this.props.board[4]} /> </div>
        <div className={classes[5]}> <Board won={this.props.won[5]} move={this.makeMove.bind(this, 5)} board={this.props.board[5]} /> </div>
        <div className={classes[6]}> <Board won={this.props.won[6]} move={this.makeMove.bind(this, 6)} board={this.props.board[6]} /> </div>
        <div className={classes[7]}> <Board won={this.props.won[7]} move={this.makeMove.bind(this, 7)} board={this.props.board[7]} /> </div>
        <div className={classes[8]}> <Board won={this.props.won[8]} move={this.makeMove.bind(this, 8)} board={this.props.board[8]} /> </div>
      </div>
    );
  }
}

export default BigBoard;
