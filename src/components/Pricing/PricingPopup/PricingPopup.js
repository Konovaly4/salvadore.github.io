import React from 'react';
import cn from 'classnames';
import CloseButton from '../../CloseButton/CloseButton';
import './PricingPopup.css';

const PricingPopup = props => {


  const popupClose = () => {
    props.setVisibility(false);
  }

  const popupCloseByOverlay = (e) => {
    !e.target.closest('.pricing-popup') && popupClose();
  }

  return (
    <div 
      className={cn('pricing-popup__overlay', {
        'pricing-popup__overlay_active': props.popupVisibility,
      })} 
      onClick={popupCloseByOverlay} >
        <article className='pricing-popup'>
        <h3 className='pricing-popup__title'>{props.item.name}</h3>
          <ul className='pricing-popup__list'>
          {props.item.services.map((i, num) => {
            return (
              <li className='pricing-popup__item' key={num} id={num}>{i.name + ' - ' + i.price}</li>
            )
          })}
          </ul>
          <CloseButton onClose={popupClose} />
        </article>
    </div>
  )
}

export default PricingPopup;