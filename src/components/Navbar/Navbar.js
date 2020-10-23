import React from 'react';
import RecordButton from '../RecordButton/RecordButton';
import logoPath from '../../Images/logo_small.png';
import './Navbar.css';

function Navbar(props) {

  return (
    <nav className={'navbar' + (props.theme === 'dark' ? ' navbar__dark' : '') + (!props.visibility ? '' : ' navbar__visible')}>
      <img className={props.theme !== 'dark' ? 'navbar__logo' : 'navbar__logo navbar__logo_dark'} src={logoPath} alt="logo" />
      {/* <RecordButton buttonPlace="navbar__button" /> */}
      <ul className={props.theme !== 'dark' ? 'navbar__list' : 'navbar__list navbar__list_dark'}>
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
