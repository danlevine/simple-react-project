import React, { PropTypes } from 'react';

const Item = ({ onClick, onDeleteClick, completed, name }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onClick}>{name}</span>
    <button onClick={onDeleteClick}>X</button>
  </li>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default Item;