import * as types from '../constants/ActionTypes';


const byId = (state = {}, action) => {
  console.log('action!', action);
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.items
    };
  }
  return state;
}

export default byId;

export const getItem = (state, id) => state[id];