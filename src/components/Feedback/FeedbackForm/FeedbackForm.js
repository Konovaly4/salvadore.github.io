import React from 'react';
import cn from 'classnames';
import CloseButton from '../../CloseButton/CloseButton';
import {feedbackTexts} from '../../../data/feedbackTexts';
import './FeedbackForm.css';

const FeedbackPopup = props => {
  const formClose = () => {
    props.setVisibility(false);
  }

  const formCloseByOverlay = (e) => {
    !e.target.closest('.feedback__form') && formClose();
  }

  return (
    <div className={cn('feedback__form-overlay', {
      'feedback__form-overlay_visible': !!props.visibility,
    })} onClick={formCloseByOverlay} >
      <form className='feedback__form'>
        <input type='text' name='name' className='feedback__input feedback__input_text' placeholder={feedbackTexts.placeholders.name} />
        <input type='email' name='email' className='feedback__input feedback__input_text' placeholder={feedbackTexts.placeholders.email} />
        <input type='text' name='date' className='feedback__input feedback__input_date' placeholder={feedbackTexts.placeholders.date} />
        <textarea type='text' name='article' className='feedback__input feedback__input_article' placeholder={feedbackTexts.placeholders.feedback} />
        <button type='submit' name='submit' className='feedback__submit-button'>{feedbackTexts.placeholders.button}</button> 
        <CloseButton onClose={formClose} />
      </form>       
    </div>
  )

}

export default FeedbackPopup;