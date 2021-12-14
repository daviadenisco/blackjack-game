export function createDeck() {
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    let deck = [];
    
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            let card = {value: values[i], suit: suits[j]};
            deck.push(card);
        }
    }
    return deck;
};


