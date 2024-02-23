
import React from "react";
import Card from "./Card";


function Deck({ deck, onHeal, onAttack, onDefend, attackMode, isActionDisabled }) {
    return (
        <div id="cardsContainer">
            {deck.map((card, index) => (
                <Card
                    key={index}
                    card={card}
                    onHeal={onHeal}
                    onAttack={onAttack}
                    onDefend={onDefend}
                    attackMode={attackMode}
                    isActionDisabled={isActionDisabled}
                />
            ))}
        </div>
    );
}

export default Deck;