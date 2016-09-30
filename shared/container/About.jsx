import React from 'react';
import Helmet from 'react-helmet';

function About() {
  return (
    <div className="index">
      <Helmet title="About" />
      <div>About</div>
    </div>
  );
}

About.propTypes = {};

export default About;
