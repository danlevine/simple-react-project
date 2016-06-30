import { combineReducers } from 'redux';
import items from './items';
import visibilityFilter from './visibilityFilter';

const tryitApp = combineReducers({
  items,
  visibilityFilter
});

export default tryitApp;