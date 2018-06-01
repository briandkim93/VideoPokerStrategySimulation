class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
}

function buildDeck(deck) {
    for (let i = 1; i <= 13; i += 1) {
        deck.push(new Card(i, 'C'));
        deck.push(new Card(i, 'D'));
        deck.push(new Card(i, 'H'));
        deck.push(new Card(i, 'S'));
    };
};

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
};

function deal(deck, hand) {
    for (let i = 0; i < 5; i += 1) {
        hand.push(deck.shift());
    };
};

function draw(deck, hand, discardIndexes) {
    discardIndexes.sort(function(a, b) {return (b-a)});
    for (let index of discardIndexes) {
        hand.splice(index, 1);
    };
    for (let i = 0; i < discardIndexes.length; i += 1) {
        hand.push(deck.shift());
    }
}