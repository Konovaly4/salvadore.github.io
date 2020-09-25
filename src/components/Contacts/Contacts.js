import React from 'react';
import RecordButton from '../RecordButton/RecordButton';
import mapPath from '../../Images/contacts/map.png';
import mainLogoPath from '../../Images/contacts/logo-dark.png';
import './Contacts.css';

const Contacts = () => {
  return (
    <section className="contacts">
      <header className="contacts__header">
        <p className="contacts__title">Контакты</p>
      </header>
      <div className="contacts__container">
        <img className="contacts__map" src={mapPath} alt="map" />
        <article className="contacts__data">
          <img className="contacts__main-logo" src={mainLogoPath} alt="main-logo" />
          <div className="contacts__data-container">
            <div className="contacts__icon contacts__icon_place" />
            <p className="contacts__description contacts__description_adress">ул. Воронцовская, д.19А, стр.1</p>
            <div className="contacts__icon" />
            <p className="contacts__description contacts__description_adress">метро<div className="contacts__subway contacts__subway_taganskaya" />Таганская</p>
            <div className="contacts__icon" />
            <p className="contacts__description contacts__description_adress"><div className="contacts__subway contacts__subway_marksistskaya" />Марксистская</p>
            <div className="contacts__icon" />
            <p className="contacts__description contacts__description_adress contacts__description_adress_last">находимся в здании клиники «Семейный доктор»</p>
            <div className="contacts__icon contacts__icon_phone" />
            <p className="contacts__description contacts__description_phone">8 903 100-48-20</p>
            <div className="contacts__icon contacts__icon_time" />
            <p className="contacts__description contacts__description_time-link">10:00 - 21:00</p>
            <div className="contacts__icon contacts__icon_instagram" />
            <p className="contacts__description contacts__description_time-link">salon_salvadore</p>
          </div>
          {/* <RecordButton buttonPlace="contacts__button" /> */}
        </article>
      </div>
    </section>
  )
}

export default Contacts;
