import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
import './Feedback.css';

const Feedback = (props) => {
  const [feedbackNum, setFeedbackNum] = React.useState(0);

  const setPrevousFeedback = () => {
    setFeedbackNum(feedbackNum - 1);
  }

  const setNextFeedack = () => {
    setFeedbackNum(feedbackNum + 1);
  }

  return (
    <section className="feedback">
      <header className="feedback__header">
        <SearchArrow elemName="team__arrow" direction="left" onClick={setPrevousFeedback} active={feedbackNum !== 0 ? 'true' : 'false'} />
        <h2 className="feedback__title">Отзывы</h2>
        <SearchArrow elemName="team__arrow" direction="right" onClick={setNextFeedack} active={feedbackNum < props.data.length - 1 ? 'true' : 'false'}  />
      </header>  
      <ul className="feedback__container">
        {props.data.slice(feedbackNum, feedbackNum + 3).map((item, num) => (
          <li key={num} className={num === 0 ?
           'feedback__item-bg feedback__item-bg_first' : 
           num === 1 ? 'feedback__item-bg feedback__item-bg_second' : 'feedback__item-bg feedback__item-bg_third'}>
            <div className="feedback__item">
              <article className="feedback__article">{item.article}</article>
              <div className="feedback__src-container">
                <p className="feedback__author">{item.author}</p>
                <p className="feedback__date">{item.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="feedback__button">Оставить отзыв</button>
    </section>
  )
}

export default Feedback;