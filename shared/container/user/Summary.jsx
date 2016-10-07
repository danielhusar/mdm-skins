import React from 'react';
import Helmet from 'react-helmet';
import UserNav from '../../components/UserNav';

function Summary() {
  return (
    <div className="index">
      <Helmet title="Summary" />
      <UserNav />
      <div>Summary</div>
    </div>
  );
}

Summary.propTypes = {};

export default Summary;
