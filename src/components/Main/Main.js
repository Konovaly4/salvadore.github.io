import React from 'react';
import RecordButton from '../RecordButton/RecordButton';
import mainLogoPath from '../../Images/main-logo.png';
import './Main.css';

function Main () {

  return (
    <section className="main">
      <img className="main__logo" src={mainLogoPath} alt="salvadore-logo" />
      <article className="main__info">
        <RecordButton buttonPlace="main__button" />
        <h2 className="main__title">О салоне</h2>
        <p className="main__subtitle">
        В нашем салоне Вы получите не только высочайшее качество обслуживания и широкий спектр услуг, но сможете расслабиться и получить позитивный заряд.
        </p>
        <ul className="main__list">
          <li className="main__item">У нас работает сильная команда мастеров-профессионалов</li>
          <li className="main__item">Мы работаем качественными материалами</li>
          <li className="main__item">Делаем максимум для Вашей безопасности</li>
          <li className="main__item">Всегда сохраняя приятные цены для Вас</li>
        </ul>
      </article>
    </section>
  )
}

export default Main;
