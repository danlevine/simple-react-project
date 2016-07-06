import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ItemsActions';
import { getErrorMessage, getIsFetching, getVisibleItems } from '../reducers'
import ItemList from '../components/ItemList';
import FetchError from '../components/FetchError'


class VisibleItemList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchItems } = this.props;
    fetchItems(filter);
  }

  render() {
    const { deleteItem, errorMessage, isFetching, items, toggleItem } = this.props;
    if (isFetching && !items.length) {
      return (<p>Loading...</p>);
    }
    if (errorMessage && !items.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()} 
        />
      );
    }

    return (
      <ItemList 
        items={items}
        onItemClick={toggleItem}
        onDeleteClick={deleteItem} 
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.filter || 'all';
  const items = getVisibleItems(state, filter) || [];
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    items,
    filter
  };
};

VisibleItemList = connect(
  mapStateToProps,
  actions
)(VisibleItemList);

export default VisibleItemList;