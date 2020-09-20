import React from 'react';
import './Header.css';
import logoPath from '../../Images/logo.png';
import logoIgPath from '../../Images/logo_ig.svg';

function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="logo" />
      <p className="header__text header__text_worktime">10:00 - 21:00</p>
      <p className="header__text header__text_address">ул. Воронцовская, д.19А, стр.1</p>
      <p className="header__phone">8 903 100-48-20</p>
      <a className="header__link" href="https://www.instagram.com/?hl=ru">
        <img src={logoIgPath} alt="logo-instagram" />
      </a>
    </header>
  )
}

export default Header;