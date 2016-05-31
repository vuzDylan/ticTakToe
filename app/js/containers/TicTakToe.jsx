import React from 'react';
import Board from '../components/BigBoard';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import { move } from '../actions/move';

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
      size: size * .8,
    });
  }

  makeMove(board, pos) {
    this.props.dispatch(move(board, pos));
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
        <Header />
        <Board
          size={this.state.size}
          board={this.props.board}
          active={this.props.active}
          move={this.makeMove}
          won={this.props.won}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TicTakToe);
