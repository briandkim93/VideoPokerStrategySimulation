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
    if (checkHighPair(hand)) {
        handResult = 'highPair';
    }
    if (checkTwoPair(hand)) {
        handResult = 'twoPair';
    }
    if (checkThreeOfAKind(hand)) {
        handResult = 'threeOfAKind';
    }
    if (checkStraight(hand)) {
        handResult = 'straight';
    }
    if (checkFlush(hand)) {
        handResult = 'flush';
    }
    if (checkFullHouse(hand)) {
        handResult = 'fullHouse';
    }
    if (checkFourOfAKind(hand)) {
        handResult = 'fourOfAKind';
    }
    if (checkStraightFlush(hand)) {
        handResult = 'straightFlush';
    }
    if (checkRoyalFlush(hand)) {
        handResult = 'royalFlush';
    }       
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
    var payout = 0;

    buildDeck(newDeck);
    shuffleDeck(newDeck);
    deal(newDeck, newHand);
    const cardsToDiscard = checkDiscardable(newHand);
    draw(newDeck, newHand, cardsToDiscard);
    payout = checkHand(newHand);
    return payout;
}

function simulation(n) {
    var simulationBalance = 0;
    var singlePayout = 0;
    var payoutPercentage;
    var coinsSpent = (n * 5);

    for (let i = 0; i < n; i += 1) {
        simulationBalance -= 5;
        singlePayout = playGame(simulationBalance);
        simulationBalance += singlePayout;
    }
    payoutPercentage = (simulationBalance + coinsSpent) / (coinsSpent) * 100;
    return payoutPercentage + '%';
}

function checkHighPair(hand) {
    // ADDITIONAL CODE REQUIRED
    return;
}

function checkTwoPair(hand) {
    // ADDITIONAL CODE REQUIRED
    return;
}

function checkThreeOfAKind(hand) {
    // ADDITIONAL CODE REQUIRED
    return;
}

function checkStraight(hand) {
    var handNumbers = hand.map(card => card.number);
    handNumbers.sort();
    if (checkRoyalStraight(hand)) {
        return true;
    }
    for (let i = 0; i < 4; i += 1) {
        if (handNumbers[i] + 1 == handNumbers[i + 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
function checkRoyalStraight(hand) {
    var handNumbers = hand.map(card => card.number);
    handNumbers.sort();
    var handNumbersString = handNumbers.join();
    if (handNumbersString === '1,10,11,12,13') {
        return true;
    } else {
        return false;
    }
}

function checkFlush(hand) {
    const handSuits = hand.map(card => card.suit);
    if (handSuits.every(function(suit) { return suit === 'C'; }) ||
        handSuits.every(function(suit) { return suit === 'D'; }) ||
        handSuits.every(function(suit) { return suit === 'H'; }) ||
        handSuits.every(function(suit) { return suit === 'S'; })) {
        return true;
    } else {
        return false;
    }
}

function checkFullHouse(hand) {
    // ADDITIONAL CODE REQUIRED
    return;
}

function checkFourOfAKind(hand) {
    // ADDITIONAL CODE REQUIRED
    return;
}

function checkStraightFlush(hand) {
    if (checkStraight(hand) && checkFlush(hand)) {
        return true;
    } else {
        return false;
    }
}

function checkRoyalFlush(hand) {
    if (checkRoyalStraight(hand) && checkFlush(hand)) {
        return true;
    } else {
        return false;
    }
}