
import React from "react";
import Card from "./Card";


function Deck({ deck, onHeal, onAttack, attackMode }) {

    return (
        <div id="cardsContainer">
            {deck.map((card, index) => (
                <Card key={index} card={card} onHeal={onHeal} onAttack={onAttack} attackMode={attackMode}  />
            ))}
        </div>
    );

}

export default Deck;