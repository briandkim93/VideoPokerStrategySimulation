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
    }
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
    }
};

function draw(deck, hand, discardIndexes) {
    discardIndexes.sort(function(a, b) {return (b-a)});
    for (let index of discardIndexes) {
        hand.splice(index, 1);
    }
    for (let i = 0; i < discardIndexes.length; i += 1) {
        hand.push(deck.shift());
    }
}

function checkDiscardable(hand) {
    const discardIndexes = [];
    // ADDITIONAL CODE REQUIRED
    return discardIndexes; 
}

function checkHand(hand) {
    var handResult = '';
    // ADDITIONAL CODE REQUIRED
    if (fiveCoinPayScale[handResult]) {
        return fiveCoinPayScale[handResult];
    } else {
        return 0;
    }
}

const fiveCoinPayScale = {
    highPair: 5,
    twoPair: 10,
    threeOfAKind: 15,
    straight: 20,
    flush: 30,
    fullHouse: 45,
    fourOfAKind: 125,
    straightFlush: 250,
    royalFlush: 4000
};

function playGame(balance) {
    const newDeck = [];
    const newHand = [];
    const payout = 0;

    buildDeck(newDeck);
    shuffleDeck(newDeck);
    deal(newDeck, newHand);
    const cardsToDiscard = checkDiscardable(newHand);
    draw(newDeck, newHand, cardsToDiscard);
    payout = checkHand(newHand);
    balance += payout;
}

function simulation(n) {
    var balance = 0;
    var payoutPercentage;
    var coinsSpent = (n * 5);

    for (let i = 0; i < n; i += 1) {
        balance -= 5;
        playGame(balance);
    }
    payoutPercentage = (balance + coinsSpent) / (coinsSpent) * 100;
    return payoutPercentage + '%';
}