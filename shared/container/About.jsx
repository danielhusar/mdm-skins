import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class About extends Component {
  render() {
    return (
      <div className="index">
        <Helmet title="About" />
        <div>About</div>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
