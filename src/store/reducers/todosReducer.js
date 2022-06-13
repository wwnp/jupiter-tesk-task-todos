
import { modes, dbTodos } from './../../utils/config';
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

const initialState = {
  todos: [],
  outTodos: [],
  mode: modes[0],
  currentLastIndex: dbTodos.length - 1,
  newTodoValue: ''
}
export const todosReducer = (state = initialState, action) => {
  const todos = state.todos

  switch (action.type) {
    case ADD_TODO:
      if (state.newTodoValue.length < 3) {
        return state
      }
      const newTodo = {
        id: state.currentLastIndex,
        title: state.newTodoValue,
        completed: false
      }
      return { ...state, todos: [...todos, newTodo] }
    case SET_CURRENT_LAST_INDEX:
      return { ...state, currentLastIndex: state.currentLastIndex + 1 }
    case SET_NEW_TODO_VALUE:
      return { ...state, newTodoValue: action.payload }
    case REMOVE_TODO:
      const newRemovedTodos = todos.filter(todo => todo.id !== action.payload)
      return { ...state, todos: newRemovedTodos }
    case SET_TODOS:
      return { ...state, todos: action.payload }
    case SET_OUT_TODOS:
      return { ...state, outTodos: action.payload }
    case SET_MODE:
      return { ...state, mode: action.payload }
    case TOGGLE_COMPLETED:
      const newToggledTodos = todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return { ...state, todos: newToggledTodos }
    case CLEAR_COMPLETED:
      const newClearedTodos = todos.map(todo => {
        todo.completed = false
        return todo
      })
      return { ...state, todos: newClearedTodos }
    default:
      return state
  }
}
