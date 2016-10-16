import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import ReactPaginate from 'react-paginate';
import BrowseCta from '../components/BrowseCta';
import { fetchBrowse } from '../redux/actions/browse';
import { fetchBrowseSettings } from '../redux/actions/browseSettings';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.buyItem = this.buyItem.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount() {
    if (!this.props.browse) {
      this.props.fetchBrowse();
      this.props.fetchBrowseSettings();
    }
  }

  buyItem() {

  }

  handlePageClick(data) {
    const page = data.selected + 1;
    const url = !page ||  page === 1 ? '/' : `/browse/${page}`;
    this.props.fetchBrowseSettings();
    this.props.fetchBrowse({ page });
    this.context.router.push(url);
    window.scrollTo(0, 0);
  }

  render() {
    const items = this.props.browse
      ? this.props.browse.map((item, i) => (<BrowseCta item={ item } key={ i } cta={ this.buyItem } user={ this.props.user } />))
      : <Loading type='spin' color='#e3e3e3' />;

    return (
      <div className="index">
        <Helmet title="Index" />
        <div className="content">
          <div className="items">
            { items }
          </div>

          { this.props.browseSettings
            ? <ReactPaginate
                pageNum={ this.props.browseSettings.pages }
                initialSelected={ this.props.params.page - 1 }
                clickCallback={ this.handlePageClick }
                activeClassName={ 'active' }
                containerClassName={ 'pagination' }
                nextClassName={ 'pagination__item' }
                previousClassName={ 'pagination__item' }
                disabledClassName={ 'disabled' }
                pageClassName={ 'pagination__item' }
              />
            : null
          }
        </div>
      </div>
    );
  }
}

Browse.need = [fetchBrowseSettings, fetchBrowse];

function mapStateToProps(state) {
  const { browse, browseSettings } = state;

  return {
    browse,
    browseSettings,
  };
}

Browse.contextTypes = {
  router: React.PropTypes.object,
};

Browse.propTypes = {
  user: PropTypes.object,
  browse: PropTypes.array,
  browseSettings: PropTypes.object,
  fetchBrowse: PropTypes.func.isRequired,
  fetchBrowseSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchBrowse,
  fetchBrowseSettings,
})(Browse);
