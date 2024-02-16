import React from 'react';
import '../Cards.scss';

function Card({ card }) {
  const healthPercentage = (card.hp / card.maxHp) * 100;
  let healthBarColor = 'rgba(76, 175, 80, 0.7)';

  if (healthPercentage < 35) {
    healthBarColor = 'rgba(244, 67, 54, 0.7)';
  } else if (healthPercentage < 50) {
    healthBarColor = 'rgba(255, 235, 59, 0.7)';
  }

  return (
    <div className="card">
      <img src={`/images/${card.name}.gif`} alt={card.name} />
      <div className="stars">{'★'.repeat(card.stars)}</div>
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${healthPercentage}%`, backgroundColor: healthBarColor }}></div>
      </div>
      <div className="actions">
        <button className='attack-button button'>
          <img src={'/images/attack.png'} alt="Attack" />
        </button>
        <button className='heal-button button'>
          <img src={'/images/heal.png'} alt="Heal" />
        </button>
        <button className='def-button button'>
          <img src={'/images/def.png'} alt="Defend" />
        </button>
      </div>
    </div>
  );
}
export default Card;