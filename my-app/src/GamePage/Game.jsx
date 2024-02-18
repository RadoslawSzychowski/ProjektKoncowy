import React, { useState, useEffect } from 'react';
import Deck from '../Cards/CardComponents/Deck';
import { deck } from '../Cards/Cards';
import { shuffleAndDeal } from '../Cards/CardComponents/ShuffleAndDeal';
import './Game.scss';
import { startGame } from '../Cards/CardComponents/StartGameButton';
import { pauseGame } from '../Cards/CardComponents/PauseGameButton';
import { newGame } from '../Cards/CardComponents/NewGameButton';

const Game = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [attackMode, setAttackMode] = useState({ isActive: false, attackingCard: null });
  const [logMessage, setLogMessage] = useState("");
  const [isLogVisible, setIsLogVisible] = useState(false);

  useEffect(() => {
    const { playerCards, computerCards } = shuffleAndDeal(deck);
    setPlayerCards(playerCards);
    setComputerCards(computerCards);
  }, []);

  useEffect(() => {
    if (isLogVisible) {
      const timer = setTimeout(() => {
        setIsLogVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLogVisible]);

  const handleHeal = (cardToHeal, healValue) => {
    setPlayerCards(currentCards => {
      return currentCards.map(card => {
        if (card.name === cardToHeal.name) {
          const newHp = Math.min(card.maxHp, card.hp + healValue);
          setLogMessage(`${cardToHeal.name} healed ${healValue} HP`);
          setIsLogVisible(true);
          return { ...card, hp: newHp };
        }
        return card;
      });
    });
  };

  const handleAttack = (selectedCard) => {
    if (attackMode.isActive && attackMode.attackingCard) {
      if (attackMode.attackingCard.name !== selectedCard.name) {
        const damage = Math.max(attackMode.attackingCard.attack - selectedCard.defense, 5);
        setLogMessage(`${attackMode.attackingCard.name} dealt ${damage} damage to ${selectedCard.name}`);
        setIsLogVisible(true);

        const updateCards = (cards, cardToDamage) => {
          return cards.map(card => {
            if (card.name === cardToDamage.name) {
              return { ...card, hp: Math.max(card.hp - damage, 0) };
            }
            return card;
          });
        };

        if (playerCards.some(card => card.name === selectedCard.name)) {
          setPlayerCards(currentCards => updateCards(currentCards, selectedCard));
        } else if (computerCards.some(card => card.name === selectedCard.name)) {
          setComputerCards(currentCards => updateCards(currentCards, selectedCard));
        }

        setAttackMode({ isActive: false, attackingCard: null });
      }
    } else {
      setAttackMode({ isActive: true, attackingCard: selectedCard });
    }
  };

  return (
    <>
      <div className="game-background-container">
        <video src="images/gameBg.mp4" autoPlay muted loop className="game-background-video" />
        <div className="game-overlay"></div>
      </div>
      <div className='game-container'>
        <Deck deck={computerCards} onAttack={handleAttack} attackMode={attackMode} />
        <p className={`log ${isLogVisible ? 'active' : ''}`}>{logMessage}</p>
        <Deck deck={playerCards} onHeal={handleHeal} onAttack={handleAttack} attackMode={attackMode} />
        <div className="game-controls">
          <button onClick={startGame} className="game-button start-game">Start Game</button>
          <button onClick={pauseGame} className="game-button pause-game">Pause</button>
          <button onClick={newGame} className="game-button new-game">New Game</button>
        </div>
      </div>
    </>
  );
};

export default Game;