import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Inventory extends Component {
  render() {
    return (
      <div className="index">
        <Helmet title="Inventory" />
        <div>Inventory</div>
      </div>
    );
  }
}

Inventory.propTypes = {};

export default Inventory;
