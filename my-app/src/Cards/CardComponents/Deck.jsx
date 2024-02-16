
import React from "react";
import Card from "./Card";


function Deck({ deck }) {
   
    return (
        <div id="cardsContainer">
            {deck.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
}

export default Deck;