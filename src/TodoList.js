import React from 'react';
import {connect} from 'react-redux';
import {todo} from './redux/reducers';
import {setVisibilityFilter} from './redux/action';

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
    ))}
  </ul>
);

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <p>
    Show: {' '}
    <FilterLink></FilterLink>
  </p>
);

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
