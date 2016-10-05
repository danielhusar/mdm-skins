import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import InventoryCta from '../components/Item';
import { fetchInventory } from '../redux/actions/inventory';
import { sellItem } from '../redux/actions/inventory';

class Inventory extends Component {
  componentWillMount() {
    if (!this.props.inventory) { this.props.fetchInventory(); }
  }

  sellItem(item) {
    this.props.sellItem(item);
  }

  render() {
    return (
      <div className="index">
        <Helmet title="Inventory" />
        <div className="content">
          <div className="items">
            { this.props.inventory.map((item, i) => <InventoryCta item={ item } key={ i } cta={ this.sellItem } />) }
          </div>
        </div>
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

Inventory.propTypes = {
  inventory: PropTypes.array.isRequired,
  fetchInventory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchInventory,
  sellItem,
})(Inventory);
