import React from 'react';
import './Navbar.css';

function Navbar(props) {

  return (
    <nav className={props.theme !== 'dark' ? 'navbar' : 'navbar navbar_dark'}>
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