import React from 'react';
import './Team.css';

const Team = (props) => {
  const [memberNum, setMemberNum] = React.useState(0);

  const setNextMembers = () => {
    setMemberNum(memberNum + 2);
  }

  return (
    <div className="team">
      <h2 className="team__title">Наши специалисты</h2>
      <div className="team__members-container">
        {props.data.slice(memberNum, memberNum + 2).map((item, num) => (
          <div className="team__member">
            <div className="team__member-data">
              <h3 className="team__member-name">{item.name}</h3>
              <p className="team__member-job">{item.job}</p>
              <div className={num === 0 ? 'team__member-bg team__member-bg_left' : 'team__member-bg team__member-bg_right'}>
                <img className="team__member-pic" alt={item.pictureAlt} src={item.src} />
              </div>
            </div>
            <p className="team__member-description">{item.description}</p>
          </div>
        ))}
      </div>
      <h2 className="team__title">Фото работ</h2>
    </div> 
  )
}

export default Team;