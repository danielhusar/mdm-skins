import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className="content">
        <Helmet
          title="Book"
          titleTemplate="%s - Book"
        />
        {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
      </div>
    );
  }
}

App.need = [];

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default connect()(App);
