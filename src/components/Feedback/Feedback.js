import React from 'react';
import './Feedback.css';

const Feedback = (props) => {
  const data = props.data.length <=3 ? props.data : props.data.slice(0, 3);
  return (
    <div className="feedback">
      <h2 className="feedback__title">Отзывы</h2>
      <ul className="feedback__container">
        {data.map((item, num) => (
          <li key={num} className={num === 0 ?
           'feedback__item-bg feedback__item-bg_first' : 
           num === 1 ? 'feedback__item-bg feedback__item-bg_second' : 'feedback__item-bg feedback__item-bg_third'}>
            <div className="feedback__item">
              <article className="feedback__article">{item.article}</article>
              <p className="feedback__author">{item.author}</p>
              <p className="feedback__date">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="feedback__button">Оставить отзыв</button>
    </div>
  )
}

export default Feedback;