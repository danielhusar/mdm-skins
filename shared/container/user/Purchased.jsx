import React from 'react';
import Helmet from 'react-helmet';
import UserNav from '../../components/UserNav';

function Purchased() {
  return (
    <div className="index">
      <Helmet title="Purchased" />
      <UserNav />
      <div>Purchased</div>
    </div>
  );
}

Purchased.propTypes = {};

export default Purchased;
