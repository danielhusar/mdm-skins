import React, { PropTypes } from 'react';
import classNames from 'classnames';
import isNumeric from 'validator/lib/isNumeric';
import Item from './Item';

class InventoryCta extends Component {

  handleSubmit() {
    if (!isNumeric(this.refs.price.value)) {
      this.setState({error: true});
    } else {
      this.props.cta({ item..., price: this.refs.price.value });
    }
  }

  render() {
    const inputClasses = {
      item__input: true,
      error: this.state.error,
    };

    return (
      <Item item={ this.props.item } =>
        <form className="g__row" onSubmit={this.handleSubmit}>
          <div className="g__c6">
            <input type="number" class={ inputClasses } ref="price" />
          </div>
          <div className="g__c6">
            <button type="submit" className="btn btn__primary">Sell</button>
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
