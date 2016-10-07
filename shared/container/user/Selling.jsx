import React from 'react';
import Helmet from 'react-helmet';
import UserNav from '../../components/UserNav';

function Selling() {
  return (
    <div className="index">
      <Helmet title="Selling" />
      <UserNav />
      <div>Selling</div>
    </div>
  );
}

Selling.propTypes = {};

export default Selling;
