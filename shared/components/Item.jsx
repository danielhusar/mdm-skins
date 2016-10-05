import React, { PropTypes, Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item__photo">
          <img src={ this.props.item.image } />
        </div>
        <div className="sp__1"></div>
        <div className="item__name">{ this.props.item.name }</div>
        <div className="sp__1"></div>
        { this.props.children }
      </div>
    );
  }
}

Item.propTypes = {};

export default Item;
