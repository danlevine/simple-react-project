import Firebase from 'firebase';
import { v4 } from 'node-uuid';
import * as types from '../constants/ActionTypes';

// const Items = new Firebase("https://flickering-fire-3051.firebaseio.com/notes");

export const fetchItems = () => {
  return dispatch => {
    Items.on('value', snapshot => {
      dispatch({
        type: types.FETCH_ITEMS,
        payload: snapshot.val()
      });
    });
  };
};


export const addItem = (name) => ({
  type: types.ADD_ITEM,
  name,
  id: v4()
});

export const deleteItem = (id) => ({
  type: types.DELETE_ITEM,
  id
});

export const toggleCompleteItem = (id) => ({
  type: types.TOGGLE_COMPLETE_ITEM,
  id
});