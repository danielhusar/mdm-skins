import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item__photo">
          <img src={ this.props.item.image } />
        </div>
        <div className="sp__2"></div>
        <div className="item__name">{ this.props.item.name }</div>
        <div className="sp__2"></div>
        { this.props.item.seller ? (
          <div className="g__row">
            <div className="g__c3">
              <Link to={`/user/${this.props.item.seller.personaname}`}>
                <img src={ this.props.item.seller.avatar } className="item__user-avatar" />
              </Link>
            </div>
            <div className="g__c9">
              <a href={ this.props.item.link } className="btn btn__secondary btn__full">Inspect</a>
            </div>
          </div>
        ) : (
          <a href={ this.props.item.link } className="btn btn__secondary btn__full">Inspect</a>
        ) }
        <div className="sp__2"></div>
        { this.props.children }
      </div>
    );
  }
}

Item.propTypes = {};

export default Item;
