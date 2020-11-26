import React from 'react';
import cn from 'classnames';
import './SearchArrow.css';

const SearchArrow = (props) => {
  const activate = props.active == 'true' ? props.elemName : props.elemName + '_inactive';

  return (
   <button className={cn('search-arrow', {
     'search-arrow_left': props.direction === 'left',
     'search-arrow_right': props.direction === 'right',
     'search-arrow_active': !!props.active
   })} onClick={props.active === true ? props.onClick : undefined} />
  )
}

export default SearchArrow;
