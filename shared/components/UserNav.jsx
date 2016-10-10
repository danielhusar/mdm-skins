import React from 'react';
import { Link } from 'react-router';

function UserNav(props) {
  return (
    <nav className="sub-nav">
      <Link to="/profile/summary" className="sub-nav__link" activeClassName="active">Summary</Link>
      <Link to="/profile/inventory" className="sub-nav__link" activeClassName="active">Inventory</Link>
      <Link to="/profile/selling" className="sub-nav__link" activeClassName="active">Selling</Link>
      <Link to="/profile/sold" className="sub-nav__link" activeClassName="active">Sold</Link>
      <Link to="/profile/purchased" className="sub-nav__link" activeClassName="active">Purchased</Link>
    </nav>
  );
}

export default UserNav;
