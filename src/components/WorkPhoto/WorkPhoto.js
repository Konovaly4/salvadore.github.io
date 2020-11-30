import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
import PhotoPopup from './PhotoPopup/PhotoPopup';
import './WorkPhoto.css';
 
const WorkPhoto = props => {
  const [photoNum, setPhotoNum] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(undefined);
  const [popupVisibility, setPopupVisibility] = React.useState(false);

  const setPrevousPhoto = () => {
    setPhotoNum(photoNum - 1)
  };

  const setNextPhoto = () => {
    setPhotoNum(photoNum + 1)
  };

  const setPicture = (e) => {
    setActiveItem(props.data.find((item) => {
      return item.id === e.target.id;
    }));
    setPopupVisibility(true);
  }

  return (
    <section className="work-photo">
      <a name='work-photo' />
      <header className="work-photo__header">
        <SearchArrow elemName="team__arrow" direction="left" onClick={setPrevousPhoto} active={photoNum !== 0 ? true : false} />
        <h2 className="work-photo__title">Фото работ</h2>
        <SearchArrow elemName="team__arrow" direction="right" onClick={setNextPhoto} active={photoNum < props.data.length - 1 ? true : false} />
      </header>
      <div className="work-photo__container">
        {props.data.slice(photoNum, photoNum + 4).map((item, num) => (
            <img key={num} id={item.id} className="work-photo-img" src={item.src} alt={item.alt} onClick={setPicture} />
          ))
        }
      </div>
      {activeItem !== undefined && <PhotoPopup item={activeItem} visibility={popupVisibility} setVisibility={setPopupVisibility} />}
    </section>
  )
}

export default WorkPhoto;