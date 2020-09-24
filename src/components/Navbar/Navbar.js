import React from 'react';
import RecordButton from '../RecordButton/RecordButton';
import logoPath from '../../Images/logo_small.png';
import './Navbar.css';

function Navbar(props) {

  return (
    <nav className={props.theme !== 'dark' ? 'navbar' : 'navbar navbar_dark'}>
      <img className="navbar__logo" src={logoPath} alt="logo" />
      <RecordButton buttonPlace="navbar__button" />
      <ul className="navbar__list">
        <li className="navbar__item">Услуги и цены</li>
        <li className={props.theme !== 'dark' ? 'navbar__item navbar__dot' : 'navbar__item navbar__dot navbar__dot_dark'}></li>
        <li className="navbar__item">Наши специалисты</li>
        <li className={props.theme !== 'dark' ? 'navbar__item navbar__dot' : 'navbar__item navbar__dot navbar__dot_dark'}></li>
        <li className="navbar__item">Акции</li>
        <li className={props.theme !== 'dark' ? 'navbar__item navbar__dot' : 'navbar__item navbar__dot navbar__dot_dark'}></li>
        <li className="navbar__item">Фото работ</li>
        <li className={props.theme !== 'dark' ? 'navbar__item navbar__dot' : 'navbar__item navbar__dot navbar__dot_dark'}></li>
        <li className="navbar__item">Отзывы</li>
        <li className={props.theme !== 'dark' ? 'navbar__item navbar__dot' : 'navbar__item navbar__dot navbar__dot_dark'}></li>
        <li className="navbar__item">Контакты</li>
      </ul>
    </nav>
  )
}

export default Navbar;
