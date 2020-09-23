import React from 'react'
import './RecordButton.css';

const RecordButton = (props) => {

  return (
    <button className={'button '+ props.buttonPlace}>Онлайн запись</button>
  )

}

export default RecordButton;
