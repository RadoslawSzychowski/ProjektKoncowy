import React, { useState, useEffect } from 'react';
import '../Cards.scss';

function Card({ card, onHeal, onAttack, attackMode, onDefend, isActionDisabled }) {
  const [recentlyHealed, setRecentlyHealed] = useState(false);
  const [healAmount, setHealAmount] = useState(0);
  const healthPercentage = Math.round((card.hp / card.maxHp) * 100);
  const [showDamage, setShowDamage] = useState(false);


// animacja heal
  useEffect(() => {
    if (recentlyHealed) {
      const timer = setTimeout(() => {
        setRecentlyHealed(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [recentlyHealed]);

// animacja dmg
  useEffect(() => {
    if (card.recentDamage) {
      setShowDamage(true);
      const timer = setTimeout(() => {
        setShowDamage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [card.recentDamage]);

// obsługa leczenia
  const handleHeal = () => {
    const healValue = Math.round(card.maxHp * 0.1) + Math.floor(Math.random() * 10) + 1;
    onHeal(card, healValue);
    setHealAmount(healValue);
    setRecentlyHealed(true);
  };

  // obsługa obrony
  const handleDefend = (e) => {
    e.stopPropagation();
    if (!isActionDisabled) {
      onDefend(card);
      
    }
  };

  // obsługa kliku ataku
  const handleClick = (e) => {
    e.stopPropagation();
    if (attackMode.isActive && attackMode.attackingCard && attackMode.attackingCard.name !== card.name) {
      onAttack(card);
    }
  };

// obsługa ataku
  const handleAttackClick = (e) => {
    e.stopPropagation();
    onAttack(card);
  };

  // health bar color
  function healthBarColor(percentage) {
    if (percentage < 35) {
      return 'rgba(244, 67, 54, 0.7)';
    } else if (percentage < 60) {
      return 'rgba(255, 235, 59, 0.7)';
    }
    return 'rgba(76, 175, 80, 0.7)';
  }



  return (
    <div className={`card ${showDamage ? 'recently-damaged' : ''}`} onClick={handleClick}>
      <img src={`/images/${card.name}.gif`} alt={card.name} />
      <div className="stars">{'★'.repeat(card.stars)}</div>
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${healthPercentage}%`, backgroundColor: healthBarColor(healthPercentage) }}></div>
      </div>
      {recentlyHealed && (
        <div className="heal-value">+{healAmount}</div>
      )}
      {showDamage && (
        <div className="damage-value">-{card.recentDamage}</div>
      )}
      <div className="actions">
        <button disabled={isActionDisabled} className='attack-button button' onClick={handleAttackClick}>
          <img src={'/images/attack.png'} alt="Attack" />
        </button>
        <button disabled={isActionDisabled} className='heal-button button' onClick={handleHeal}>
          <img src={'/images/heal.png'} alt="Heal" />
        </button>
        <button className='def-button button' onClick={handleDefend}>
          <img src={'/images/def.png'} alt="Defend" />
        </button>
      </div>
    </div>
  );
}

export default Card;