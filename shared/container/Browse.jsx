import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import ReactPaginate from 'react-paginate';
import Filters from '../components/Filters';
import BrowseCta from '../components/BrowseCta';
import { fetchBrowse } from '../redux/actions/browse';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.buyItem = this.buyItem.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.filtersSubmit = this.filtersSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.browse) {
      this.props.fetchBrowse();
    }
  }

  buyItem() {

  }

  filtersSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  handlePageClick(data) {
    const page = data.selected + 1;
    const url = !page ||  page === 1 ? '/' : `/browse/${page}`;
    this.props.fetchBrowse({ page });
    this.context.router.push(url);
    window.scrollTo(0, 0);
  }

  items() {
    return this.props.browse
      ? this.props.browse.items.map((item, i) => (<BrowseCta item={ item } key={ i } cta={ this.buyItem } user={ this.props.user } />))
      : <Loading type='spin' color='#e3e3e3' />;
  }

  pagination() {
    return this.props.browse
      ? <ReactPaginate
          pageNum={ this.props.browse.pages }
          initialSelected={ this.props.params.page - 1 }
          clickCallback={ this.handlePageClick }
          activeClassName={ 'active' }
          containerClassName={ 'pagination' }
          nextClassName={ 'pagination__item' }
          previousClassName={ 'pagination__item' }
          disabledClassName={ 'disabled' }
          pageClassName={ 'pagination__item' }
        />
      : null;
  }

  render() {
    return (
      <div className="index">
        <Helmet title="Index" />
        <div className="content">
          <div className="sp__1"></div>
          <Filters handleSubmit={ this.filtersSubmit }/>
          <div className="sp__1"></div>
          <div className="items">
            { this.items() }
          </div>
          { this.pagination() }
        </div>
      </div>
    );
  }
}

Browse.need = [fetchBrowse];

function mapStateToProps(state) {
  const { browse } = state;

  return {
    browse,
  };
}

Browse.contextTypes = {
  router: React.PropTypes.object,
};

Browse.propTypes = {
  user: PropTypes.object,
  browse: PropTypes.object,
  fetchBrowse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchBrowse,
})(Browse);
