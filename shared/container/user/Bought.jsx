import React from 'react';
import Helmet from 'react-helmet';
import UserNav from '../../components/UserNav';

function Bought() {
  return (
    <div className="index">
      <Helmet title="Bought" />
      <UserNav />
      <div>Bought</div>
    </div>
  );
}

Bought.propTypes = {};

export default Bought;
