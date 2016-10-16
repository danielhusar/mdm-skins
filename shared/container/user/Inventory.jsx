import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import InventoryCta from '../../components/InventoryCta';
import UserNav from '../../components/UserNav';
import { fetchInventory, sellItem } from '../../redux/actions/inventory';
import { fetchSelling } from '../../redux/actions/selling';

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

  showItem(item) {
    let show = true;

    if (item.marketable !== 1 || item.tradable !== 1) {
      show = false;
    }

    if (this.props.selling && show) {
      this.props.selling.forEach(sellingItem => {
        if (sellingItem.id === item.id) {
          show = false;
        }
      });
    }

    return show;
  }

  render() {
    const items = this.props.inventory
      ? this.props.inventory.map((item, i) => (this.showItem(item) ? <InventoryCta item={ item } key={ i } cta={ this.sellItem } /> : null))
      : <Loading type="spin" color="#e3e3e3" />;


    return (
      <div className="index">
        <Helmet title="Inventory" />
        <UserNav />
        <div className="content">
          <div className="items">
            { items }
          </div>
        </div>
      </div>
    );
  }
}

Inventory.need = [fetchInventory, fetchSelling];

function mapStateToProps(state) {
  const { inventory, selling } = state;

  return {
    inventory,
    selling,
  };
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  fetchInventory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchInventory,
  fetchSelling,
  sellItem,
})(Inventory);
