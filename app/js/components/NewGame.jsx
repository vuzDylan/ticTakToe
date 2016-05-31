import React from 'react';

class NewGame extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.newGame}>New Game</button>
      </div>
    );
  }
}

export default NewGame;
