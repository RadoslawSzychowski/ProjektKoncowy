import React from 'react';
import Deck from '../Cards/CardComponents/Deck';
import { deck } from '../Cards/Cards';







const Game = () => {
 
  return (
    <Deck deck={deck} />
  );
};

export default Game;