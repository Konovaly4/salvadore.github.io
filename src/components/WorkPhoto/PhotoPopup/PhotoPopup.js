import React from 'react';
import cn from 'classnames';
import CloseButton from '../../CloseButton/CloseButton';
import './PhotoPopup.css';

const PhotoPopup = props => {
  const popupClose = () => {
    props.setVisibility(false);
  }

  const popupCloseByOverlay = (e) => {
    !e.target.closest('.photo-popup') && popupClose();
  }

  return (
    <div className={cn('photo-popup-overlay', {
      'photo-popup-overlay_visible': !!props.visibility,
    })} onClick={popupCloseByOverlay} >
      <div className='photo-popup'>
        <img className='photo-pic' src={props.item.src} alt={props.item.alt} />
        <CloseButton onClose={popupClose} /> 
      </div>       
    </div>
  )
}

export default PhotoPopup;