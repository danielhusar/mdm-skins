import React from 'react';
import Helmet from 'react-helmet';
import UserNav from '../../components/UserNav';

function Sold() {
  return (
    <div className="index">
      <Helmet title="Sold" />
      <UserNav />
      <div>Sold</div>
    </div>
  );
}

Sold.propTypes = {};

export default Sold;
