import {ADD_TODO, TOGGLE_TODO} from '../config/configActionType';

const todos = (state = [], action) => {
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((item) => {
        console.log(item)
        console.log(action)
        return item.id === action.id ? { ...item, completed: !item.completed } : item
      })
    default:
      return state
  }
}

export default todos
