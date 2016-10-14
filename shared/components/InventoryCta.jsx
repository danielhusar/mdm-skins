import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import isNumeric from 'validator/lib/isNumeric';
import Item from './Item';

class InventoryCta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!isNumeric(this.refs.price.value)) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.cta({ ...this.props.item, price: this.refs.price.value });
    }
  }

  render() {
    const inputClasses = {
      item__input: true,
      error: !!this.state.error,
    };

    return (
      <Item item={ this.props.item }>
        <form className="g__row g__row-fit" onSubmit={ this.handleSubmit }>
          <div className="g__c5">
            <input type="number" className={ classNames(inputClasses) } ref="price" />
          </div>
          <div className="g__c7">
            <button type="submit" className="btn btn__primary btn__full">Sell</button>
          </div>
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
