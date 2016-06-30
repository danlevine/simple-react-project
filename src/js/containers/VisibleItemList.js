import { connect } from 'react-redux';
import { toggleCompleteItem, deleteItem } from '../actions/ItemsActions';
import ItemList from '../components/ItemList';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  };
};

const mapStateToProps = (state) => ({
  items: getVisibleItems(state.items, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onItemClick(id) {
    dispatch(toggleCompleteItem(id));
  },
  onItemDeleteClick(id) {
    dispatch(deleteItem(id));
  }
});

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default VisibleItemList;