import React from 'react';
import FilterLink from '../container/FilterLink'
import { VisibilityFilters } from '../action'

const Footer = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default Footer;
