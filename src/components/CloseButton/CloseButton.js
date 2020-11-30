import React from 'react';
import './CloseButton.css';

const CloseButton = props => {
  return (
    <button className='close-button' onClick={props.onClose} />
  )
}

export default CloseButton;