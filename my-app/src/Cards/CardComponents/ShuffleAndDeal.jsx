
export function shuffleAndDeal(deck) {

    let shuffledDeck = [...deck].sort(() => 0.5 - Math.random());


    const halfway = Math.ceil(shuffledDeck.length / 2);
    const playerCards = shuffledDeck.slice(0, halfway);
    const computerCards = shuffledDeck.slice(halfway);

    return { playerCards, computerCards };
}