import React, { PropTypes } from 'react';

const Item = ({ onClick, onItemDeleteClick, completed, name }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onClick}>{name}</span>
    <button onClick={onItemDeleteClick}>X</button>
  </li>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  onItemDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default Item;