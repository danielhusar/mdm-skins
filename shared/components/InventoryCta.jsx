import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import isFloat from 'validator/lib/isFloat';
import Item from './Item';

class InventoryCta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!isFloat(this.refs.price.value) || this.refs.price.value <= 0) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.cta({ ...this.props.item, price: this.refs.price.value });
    }
  }

  render() {
    const inputClasses = {
      item__input: true,
      g__c: true,
      error: !!this.state.error,
    };

    return (
      <Item item={ this.props.item }>
        <form className="g__flex" onSubmit={ this.handleSubmit }>
          <input type="number" className={ classNames(inputClasses) } ref="price" step="any" min="0" />
          <button type="submit" className="btn btn__primary g__c">Sell</button>
        </form>
      </Item>
    );
  }
}

InventoryCta.propTypes = {
  item: PropTypes.object.isRequired,
  cta: PropTypes.func.isRequired,
};

export default InventoryCta;
