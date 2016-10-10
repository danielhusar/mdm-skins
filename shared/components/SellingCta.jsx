import React, { Component, PropTypes } from 'react';
import Item from './Item';

class SellingCta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.cta({ ...this.props.item });
  }

  render() {
    const inputClasses = {
      item__input: true,
      error: !!this.state.error,
    };

    return (
      <Item item={ this.props.item }>
        <button type="submit" className="btn btn__primary btn__full" onClick={ this.handleSubmit }>Delete</button>
      </Item>
    );
  }
}

SellingCta.propTypes = {
  item: PropTypes.object.isRequired,
  cta: PropTypes.func.isRequired,
};

export default SellingCta;
