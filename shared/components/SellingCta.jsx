import React, { Component, PropTypes } from 'react';
import Item from './Item';

class SellingCta extends Component {
  constructor(props) {
    super(props);
    this.handleCta = this.handleCta.bind(this);
  }

  handleCta(e) {
    e.preventDefault();
    this.props.cta({ ...this.props.item });
  }

  render() {
    return (
      <Item item={ this.props.item }>
        <button type="submit" className="btn btn__primary btn__full" onClick={ this.handleCta }>Delete</button>
      </Item>
    );
  }
}

SellingCta.propTypes = {
  item: PropTypes.object.isRequired,
  cta: PropTypes.func.isRequired,
};

export default SellingCta;
