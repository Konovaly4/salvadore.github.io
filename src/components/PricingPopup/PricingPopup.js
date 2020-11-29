import React from 'react';
import cn from 'classnames';
import './PricingPopup.css';

const PricingPopup = props => {

  return (
    <div 
      className={cn('pricing-popup__blur', {
        'pricing-popup__blur_active': props.visibility,
      })} 
      onClick={props.visibilityToggle} >
        {props.item !== undefined && 
          <article className='pricing-popup'>
            <h3 className='pricing-popup__title'>{props.item.name}</h3>
            <ul className='pricing-popup__list'>
            {props.item.services.map((i, num) => {
              return (
                <li className='pricing-popup__item' key={num} id={num}>{i.name + ' - ' + i.price}</li>
              )
            })}
            </ul>
            <button className='pricing-popup__close-button' onClick={props.visibilityToggle} />
          </article>
        }
    </div>
  )
}

export default PricingPopup;