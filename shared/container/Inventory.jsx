import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchInventory } from '../redux/actions/inventory';

class Inventory extends Component { // eslint-disable-line
  componentWillMount() {
    if (!this.props.inventory) {
      this.props.fetchInventory();
    }
  }

  render() {
    return (
      <div className="index">
        <Helmet title="Inventory" />
        <div>Inventory</div>
      </div>
    );
  }
}

Inventory.need = [() => fetchInventory()];

function mapStateToProps(state) {
  const { inventory } = state;

  return {
    inventory,
  };
}

Inventory.propTypes = {};

export default connect(mapStateToProps, {
  fetchInventory,
})(Inventory);
