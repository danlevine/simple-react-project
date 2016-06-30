import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({ items, onItemClick, onItemDeleteClick }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
        onItemDeleteClick={() => onItemDeleteClick(item.id)}
      />
    )}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onItemDeleteClick: PropTypes.func.isRequired
};

export default ItemList;