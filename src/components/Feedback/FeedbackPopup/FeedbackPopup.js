import React from 'react';
import cn from 'classnames';
import CloseButton from '../../CloseButton/CloseButton';
import './FeedbackPopup.css';

const FeedbackPopup = props => {
  const popupClose = () => {
    props.setVisibility(false);
  }

  const popupCloseByOverlay = (e) => {
    !e.target.closest('.photo-popup') && popupClose();
  }

  return (
    <div className={cn('feedback-popup-overlay', {
      'feedback-popup-overlay_visible': !!props.visibility,
    })} onClick={popupCloseByOverlay} >
      <div className='feedback-popup'>
        <p className='feedback-popup__article'>{props.item.article}</p>
        <p className='feedback-popup__author'>{props.item.author}</p>
        <p className='feedback-popup__date'>{props.item.date}</p>
        <CloseButton onClose={popupClose} /> 
      </div>       
    </div>
  )
}

export default FeedbackPopup;