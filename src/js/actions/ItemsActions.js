import Firebase from 'firebase';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { getIsFetching } from '../reducers';
import * as types from '../constants/ActionTypes';
import * as api from '../api';


// const Items = new Firebase("https://flickering-fire-3051.firebaseio.com/notes");

export const addItem = (name) => (dispatch) =>
  api.addItem(name).then(response => {
    dispatch({
      type: types.ADD_ITEM_SUCCESS,
      response: normalize(response, schema.item)
    });
  });

export const deleteItem = (id) => (dispatch) =>
  api.deleteItem(id).then(response => {
    dispatch({
      type: types.DELETE_ITEM,
      response: normalize(response, schema.item)
    });
  });

export const toggleItem = (id) => (dispatch) =>
  api.toggleItem(id).then(response => {
    dispatch({
      type: types.TOGGLE_COMPLETE_ITEM,
      response: normalize(response, schema.item)
    });
  });


// ASYNC ACTION CREATORS
export const fetchItems = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: types.FETCH_ITEMS_REQUEST,
    filter
  });

  return api.fetchItems(filter).then(
    response => {
      dispatch({
        type: types.FETCH_ITEMS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfItems)
      });
    },
    error => {
      dispatch({
        type: types.FETCH_ITEMS_FAILURE,
        filter,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};