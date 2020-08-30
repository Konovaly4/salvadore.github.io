import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">Услуги и цены</li>
        <li className="navbar__item navbar__dot"></li>
        <li className="navbar__item">Наши специалисты</li>
        <li className="navbar__item navbar__dot"></li>
        <li className="navbar__item">Акции</li>
        <li className="navbar__item navbar__dot"></li>
        <li className="navbar__item">Фото работ</li>
        <li className="navbar__item navbar__dot"></li>
        <li className="navbar__item">Отзывы</li>
        <li className="navbar__item navbar__dot"></li>
        <li className="navbar__item">Контакты</li>
      </ul>
    </div>
  )
}

export default Navbar;