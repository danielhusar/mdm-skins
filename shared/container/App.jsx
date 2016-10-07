import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchUser } from '../redux/actions/user';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Helmet title="Index" titleTemplate="%s - MDM Skins" />
        <Header user={ this.props.user } />
        <div className="container">
          { React.cloneElement(this.props.children, { key: this.props.location.pathname, user: this.props.user }) }
        </div>
        <Footer />
      </div>
    );
  }
}

App.need = [fetchUser];

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
