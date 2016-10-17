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
        <div className="item__meta">
          { this.props.item.category ? <div className="item__category">{ this.props.item.category }</div> : null }
          { this.props.item.exterior ? <div className="item__category">{ this.props.item.exterior }</div> : null }
          { this.props.item.quality ? <div className="item__category">{ this.props.item.quality }</div> : null }
        </div>
        <div className="sp__2"></div>
        <Link to={`/user/${this.props.item.seller.personaname}`} className="item__user-avatar-link">
          <img src={ this.props.item.seller.avatar } className="item__user-avatar" />
        </Link>

        <a href={ `${this.props.item.seller.profileurl}inventory/#730_2_${this.props.item.id}` } className="btn btn__secondary btn__full" rel="nofollow" target="_blank">View item</a>

        { this.props.item.price ? (
          <div>
            <div className="sp__1"></div>
            <div className="btn btn__full btn__alt">{ this.props.item.price } $</div>
          </div>
        ) : null }

        <div className="sp__1"></div>
        { this.props.children }
      </div>
    );
  }
}

Item.propTypes = {};

export default Item;
