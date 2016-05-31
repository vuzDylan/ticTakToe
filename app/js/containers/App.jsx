import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return {}
}

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
