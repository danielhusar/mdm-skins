import React, { PropTypes } from 'react';

function Header(props, context) {
  return (
    <header className="header">
      <div className="container">
        { props.user ?
          (
            <div className="center">
              <a href="/auth/logout">Logout</a>
              <img src={ props.user.avatarfull } className="header__avatar" />
            </div>
          )
          :
          (<a href="/auth/steam">Login</a>)
        }
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
