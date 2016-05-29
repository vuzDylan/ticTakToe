import React from 'react';
import Board from '../components/BigBoard';
import { connect } from 'react-redux';
import { move } from '../actions/move';
import { newGame } from '../actions/game';
import NewGame from '../components/NewGame';

function mapStateToProps(store) {
  return {
    board: store.board.board,
    active: store.board.active,
    won: store.game.won,
  }
}

class TicTakToe extends React.Component {
  constructor() {
    super();

    this.restart = this.restart.bind(this);
    this.makeMove = this.makeMove.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      size: 800
    }
  }

  handleResize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let size = w > h ? h : w;
    this.setState({
      size: size * .9,
    });
  }

  makeMove(board, pos) {
    this.props.dispatch(move(board, pos));
  }

  restart() {
    this.props.dispatch(newGame(2));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        <Board
          size={this.state.size}
          board={this.props.board}
          active={this.props.active}
          move={this.makeMove}
          won={this.props.won}
        />
        <NewGame newGame={this.restart} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TicTakToe);
