import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import InventoryCta from '../../components/InventoryCta';
import UserNav from '../../components/UserNav';
import { fetchInventory, sellItem } from '../../redux/actions/inventory';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.sellItem = this.sellItem.bind(this);
  }

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
        <UserNav />
        <div className="content">
          <div className="items">
            { this.props.inventory ?
              this.props.inventory.map((item, i) => (<InventoryCta item={ item } key={ i } cta={ this.sellItem } />))
              : <Loading type='spin' color='#e3e3e3' /> }
          </div>
        </div>
      </div>
    );
  }
}

Inventory.need = [fetchInventory];

function mapStateToProps(state) {
  const { inventory } = state;

  return {
    inventory,
  };
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  fetchInventory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchInventory,
  sellItem,
})(Inventory);
