import React from 'react';
import Helmet from 'react-helmet';

function Index() {
  return (
    <div className="index">
      <Helmet title="Index" />
      <div>Index</div>
    </div>
  );
}

Index.propTypes = {};

export default Index;
