import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Books extends Component {
  render() {
    return (
      <div className="books">
        <Helmet title="Books" />
        Books
      </div>
    );
  }
}

Books.propTypes = {};

export default Books;
