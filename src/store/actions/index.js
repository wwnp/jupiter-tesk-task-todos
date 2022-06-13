import {
  ADD_TODO,
  SET_CURRENT_LAST_INDEX,
  SET_NEW_TODO_VALUE,
  SET_TODOS,
  SET_OUT_TODOS,
  SET_MODE,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED
} from './../actionTypes/index';

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
export function setTodosAction(payload) {
  return {
    type: SET_TODOS,
    payload
  }
}
export function setOutTodosAction(payload) {
  return {
    type: SET_OUT_TODOS,
    payload
  }
}
export function removeTodoAction(payload) {
  return {
    type: REMOVE_TODO,
    payload
  }
}
export function setModeAction(payload) {
  return {
    type: SET_MODE,
    payload
  }
}
export function toggleCompleteAction(payload) {
  return {
    type: TOGGLE_COMPLETED,
    payload
  }
}
export function clearCompletedAction() {
  return {
    type: CLEAR_COMPLETED,
  }
}