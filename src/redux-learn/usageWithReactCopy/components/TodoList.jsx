import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'

const TodoList = ({todos, toggleTodo }) => {
  console.log(todos)
  console.log(toggleTodo)
  return (
    <ul>
      {todos.map(todo => {
          return(
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          )
        }
      )}
    </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
