import React, { PropTypes } from 'react';

function Header(props, context) {
  return (
    <header className="header">
      <a href="/auth/steam">Login</a>
      <a href="/auth/logout">Logout</a>
      {JSON.stringify(props.user)}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
