import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({ items, onItemClick, onDeleteClick }) => {
  console.log('ItemList:items', items);
  return (
    <ul>
      {Object.keys(items).map(key =>
        <Item
          key={key}
          name={items[key]}
          onClick={() => onItemClick(item.id)}
          onDeleteClick={() => onDeleteClick(item.id)}
        />
      )}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ItemList;