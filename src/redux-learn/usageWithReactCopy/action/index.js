import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO,SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../config/actionConfig';

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const VisibilityFilters = {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}
