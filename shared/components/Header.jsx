import React, { PropTypes } from 'react';
import { Link } from 'react-router';


function Header(props) {
  return (
    <header className="header">
      <div className="container u__flex">
        <Link to="/" className="header__logo">
          <img src="http://placehold.it/150x50?text=Logo" />
        </Link>
        <div className="header__links center">
          <Link to="/help" className="header__link" activeClassName="active">Help</Link>
          <Link to="/about" className="header__link" activeClassName="active">About</Link>
          { props.user ?
            (
            <span className="center">
              <a href="/auth/logout" className="header__link">Logout</a>
              <Link to="/profile/summary" className="header__avatar">
                <img src={ props.user.avatar } />
              </Link>
            </span>
            )
            :
            (<a href="/auth/steam" className="header__link">Login</a>)
          }
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
