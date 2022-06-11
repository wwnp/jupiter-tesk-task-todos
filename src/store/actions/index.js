import {
  TEST,
  ADD_TODO,
  SET_CURRENT_LAST_INDEX,
  SET_NEW_TODO_VALUE
} from './../actionTypes/index';

export function testAction() {
  return {
    type: TEST
  }
}
export function addTodoAction() {
  return {
    type: ADD_TODO
  }
}
export function setCurrentLastIndexAction() {
  return {
    type: SET_CURRENT_LAST_INDEX
  }
}
export function setNewTodoValueAction(payload) {
  return {
    type: SET_NEW_TODO_VALUE,
    payload
  }
}