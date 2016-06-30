import UUID from 'node-uuid';
import * as types from '../constants/ActionTypes';


let nextTodoId = 0

export function addItem(name) {  
  return {
    type: types.ADD_ITEM,
    name,
    id: UUID.v4()
  };
};

export function deleteItem(id) {  
  return {
    type: types.DELETE_ITEM,
    id
  };
};

export function toggleCompleteItem(id) {  
  return {
    type: types.TOGGLE_COMPLETE_ITEM,
    id
  };
};