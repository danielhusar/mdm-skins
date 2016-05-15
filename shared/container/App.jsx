import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import { fetchUser } from '../redux/actions/user';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className="content">
        <Helmet title="Book" titleTemplate="%s - Book"/>
        <Header user={ this.props.user } />
        { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
      </div>
    );
  }
}

App.need = [() => { return fetchUser(); }];

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  };
}

export default connect(mapStateToProps, {
  fetchUser,
})(App);
