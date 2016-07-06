import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({ items, onItemClick, onDeleteClick }) => {
  return (
    <ul>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
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