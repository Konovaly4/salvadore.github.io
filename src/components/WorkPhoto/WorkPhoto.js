import React from 'react';
import './WorkPhoto.css';
 
const WorkPhoto = (props) => {
  const data = props.data.length <= 8 ? props.data : props.data.slice(0, 8)
  return (
    <div className="work-photo">
      <h2 className="work-photo__title">Фото работ</h2>
      <div className="work-photo__container">
        {data.map((item, num) => (
            <img key={num} className="work-photo-img" src={item.src} alt={item.alt} />
          ))
        }
      </div>
    </div>
  )
}

export default WorkPhoto;