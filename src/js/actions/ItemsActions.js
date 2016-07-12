import firebase from 'firebase';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { getIsFetching } from '../reducers';
import * as types from '../constants/ActionTypes';
import * as api from '../api';


const config = {
  apiKey: "AIzaSyC0WHChgY9Ahgr7t4NRCQajmL_vG6mtQ1o",
  authDomain: "flickering-fire-3051.firebaseapp.com",
  databaseURL: "https://flickering-fire-3051.firebaseio.com",
  storageBucket: "flickering-fire-3051.appspot.com",
};
firebase.initializeApp(config);
const rootRef = firebase.database().ref()

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

  return rootRef.on('value', snapshot => {
    console.log('snapshot.val().items', snapshot.val().items);
    dispatch({
      type: types.FETCH_ITEMS_SUCCESS,
      filter,
      response: normalize(snapshot.val().items, schema.arrayOfItems)
    });
  });


  // return api.fetchItems(filter).then(
  //   response => {
  //     dispatch({
  //       type: types.FETCH_ITEMS_SUCCESS,
  //       filter,
  //       response: normalize(response, schema.arrayOfItems)
  //     });
  //   },
  //   error => {
  //     dispatch({
  //       type: types.FETCH_ITEMS_FAILURE,
  //       filter,
  //       message: error.message || 'Something went wrong.'
  //     });
  //   }
  // );
};