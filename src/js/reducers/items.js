import { v4 } from 'node-uuid';
import * as types from '../constants/ActionTypes';


const initialState = [
  {
    id: v4(),
    name: 'Interstellar',
    completed: true
  },
  {
    id: v4(),
    name: 'The Matrix',
    completed: true
  },
  {
    id: v4(),
    name: 'Midnight Special',
    completed: true
  },
  {
    id: v4(),
    name: 'Crouching Tiger, Hidden Dragon',
    completed: false
  }
];

const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        completed: false
      };
    case 'DELETE_ITEM':
      if (state.id !== action.id) {
        return state;
      }
      return;
    case 'TOGGLE_COMPLETE_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'DELETE_ITEM':
      return state.filter(t =>
        item(t, action)
      );
    case 'TOGGLE_COMPLETE_ITEM':
      return state.map(t =>
        item(t, action)
      );
    default:
      return state;
  }
}

export default items;