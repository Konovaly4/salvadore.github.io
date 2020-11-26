import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
import './WorkPhoto.css';
 
const WorkPhoto = (props) => {
  const [photoNum, setPhotoNum] = React.useState(0);

  const setPrevousPhoto = () => {
    setPhotoNum(photoNum - 1)
  };

  const setNextPhoto = () => {
    setPhotoNum(photoNum + 1)
  };

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
            <img key={num} className="work-photo-img" src={item.src} alt={item.alt} />
          ))
        }
      </div>
    </section>
  )
}

export default WorkPhoto;