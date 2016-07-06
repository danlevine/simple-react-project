import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggleId, entities} = action.response;
    const { completed } = entities.items[toggleId];
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );
    return shouldRemove ?
      state.filter(id => id !== toggleId) :
      state;
  };

  const ids = (state = [], action) => {
    switch(action.type) {
      case types.FETCH_ITEMS_SUCCESS:
        return filter === action.filter ?
          action.response.result :
          state;
      case types.ADD_ITEM_SUCCESS:
        return filter !== 'completed' ?
          [...state, action.response.result] :
          state;
      case types.TOGGLE_COMPLETE_ITEM:
        return handleToggle(state, action);
      default:
        return state;
    };
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case types.FETCH_ITEMS_REQUEST:
        return true;
      case types.FETCH_ITEMS_SUCCESS:
      case types.FETCH_ITEMS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case types.FETCH_ITEMS_FAILURE:
        return action.message;
      case types.FETCH_ITEMS_REQUEST:
      case types.FETCH_ITEMS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;