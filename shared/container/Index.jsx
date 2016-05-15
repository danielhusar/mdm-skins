import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Helmet title="Index" />
        <div>Index</div>
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
