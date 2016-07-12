import { combineReducers } from 'redux';
import { v4 } from 'node-uuid';

import * as types from '../constants/ActionTypes';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';



const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const items = combineReducers({
  byId,
  listByFilter
});

export default items;

// SELECTORS
export const getVisibleItems = (state, filter) => {
  console.log('reducers.js:state', state)
  const ids = fromList.getIds(state.listByFilter[filter]);
  console.log('reducers.js:ids', ids);
  // return ids.map(id => fromById.getItem(state.byId, id));
  return ids;
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);