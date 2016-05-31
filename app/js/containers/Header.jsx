import React from 'react';
import NewGame from '../components/NewGame';
import { connect } from 'react-redux';
import { newGame } from '../actions/game';

function mapStateToProps(store) {
  return {
    player: store.game.player,
    message: store.invalid,
    winner: store.game.winner,
  }
}

class Header extends React.Component {

  constructor() {
    super();
    this.restart = this.restart.bind(this);
  }

  restart() {
    this.props.dispatch(newGame(2));
  }

  render() {
    return (
      <div className="heading">
        { this.props.winner ? 
          <h2>{"Player " + this.props.player + " Wins!!!"}</h2> :
          <h2>{"Player " + this.props.player + "'s Turn"}</h2>
        }
        <h3>{this.props.message}</h3>
        <NewGame newGame={this.restart} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
