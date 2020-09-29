import React from 'react';
import './SearchArrow.css';

const SearchArrow = (props) => {
  const activate = props.active == 'true' ? props.elemName : props.elemName + '_inactive';

  return (
   <button className={'search-arrow ' + ' search-arrow_' + props.direction + ' ' + activate} onClick={props.active == 'true' ? props.onClick : undefined} />
  )
}

export default SearchArrow;
