import React from 'react';
import WorkPhoto from '../WorkPhoto/WorkPhoto';
import './Team.css';

const Team = (props) => {
  const [memberNum, setMemberNum] = React.useState(0);

  const setNextMembers = () => {
    setMemberNum(memberNum + 2);
  }

  return (
    <section className="team">
      <h2 className="team__title">Наши специалисты</h2>
      <div className="team__members-container">
        {props.data.slice(memberNum, memberNum + 2).map((item, num) => (
          <article key={num} className="team__member">
            <div className="team__member-data">
              <h3 className="team__member-name">{item.name}</h3>
              <p className="team__member-job">{item.job}</p>
              <div className={(num === 0 || (num % 2 === 0)) ? 'team__member-bg team__member-bg_one' : 'team__member-bg team__member-bg_two'}>
                <img className="team__member-pic" alt={item.pictureAlt} src={item.src} />
              </div>
            </div>
            <p className="team__member-description">{item.description}</p>
          </article>
        ))}
      </div>
      <WorkPhoto data={props.photo} />
    </section>
  )
}

export default Team;
