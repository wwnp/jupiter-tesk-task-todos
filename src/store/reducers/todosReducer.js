import {
  TEST,
  ADD_TODO,
  SET_CURRENT_LAST_INDEX,
  SET_NEW_TODO_VALUE
} from './../actionTypes/index';
const initialState = {
  todos: [],
  currentLastIndex: 0,
  newTodoValue: ''
}
export const todosReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case TEST:
      return { ...state, test: true }
    case ADD_TODO:
      const todos = state.todos
      const newTodo = {
        id: state.currentLastIndex + 1,
        title: state.newTodoValue,
        completed: false
      }
      return { ...state, todos: [...todos, newTodo] }
    case SET_CURRENT_LAST_INDEX:
      return { ...state, currentLastIndex: state.currentLastIndex + 1 }
    case SET_NEW_TODO_VALUE:
      return { ...state, newTodoValue: action.payload }
    default:
      return state
  }
}
