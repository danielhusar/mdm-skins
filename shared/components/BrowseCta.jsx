import React, { Component, PropTypes } from 'react';
import Item from './Item';

class BrowseCta extends Component {
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
        <div className="g__flex">
          <a href={ `${this.props.item.seller.profileurl}inventory/#730_2_${this.props.item.id}` }
            className="btn btn__secondary btn__full g__c" rel="nofollow" target="_blank">View</a>
          { this.props.user
            ? <button type="submit" className="btn btn__primary g__c" onClick={ this.handleCta }>Buy</button>
            : null
          }
        </div>
      </Item>
    );
  }
}

BrowseCta.propTypes = {
  user: PropTypes.object,
  item: PropTypes.object.isRequired,
  cta: PropTypes.func.isRequired,
};

export default BrowseCta;
