import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import SellingCta from '../../components/SellingCta';
import UserNav from '../../components/UserNav';
import { fetchSelling, deleteItem } from '../../redux/actions/selling';

class Selling extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentWillMount() {
    if (!this.props.selling) { this.props.fetchSelling(); }
  }

  deleteItem(item) {
    this.props.deleteItem(item);
  }

  render() {
    return (
      <div className="index">
        <Helmet title="Selling" />
        <UserNav />
        <div className="content">
          Total items: { this.props.selling.length }

          <div className="items">
            { this.props.selling ?
              this.props.selling.map((item, i) => (<SellingCta item={ item } key={ i } cta={ this.deleteItem } />))
              : <Loading type='spin' color='#e3e3e3' /> }
          </div>
        </div>
      </div>
    );
  }
}

Selling.need = [fetchSelling];

function mapStateToProps(state) {
  const { selling } = state;

  return {
    selling,
  };
}

Selling.propTypes = {
  selling: PropTypes.array,
  fetchSelling: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchSelling,
  deleteItem,
})(Selling);
