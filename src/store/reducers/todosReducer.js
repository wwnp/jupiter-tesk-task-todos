import { TEST } from './../actionTypes/index';
const initialState = {

  a: 1
}
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, test: true }
    default:
      return state
  }
}
