import { Card } from './Card.js';
import { compareTwoRanks, Rank } from './Rank.js';
import { compareTwoSuits, Suit } from './Suit.js';

// REQUIRES: firstRank and secondRank are rank objects
// EFFECTS: returns true if key-value pairs are equivalent
// USAGE: if (objectsAreEqual(rankObject1, rankObject2)) ...
function objectsAreEqual(firstObject: Object, secondObject: Object): boolean {

    // COMMENTS: check if the values match for all corresponding keys
    const allRankKeys: Array<string> = Object.keys(firstObject);

    for (let rank_key of allRankKeys) {
        if (firstObject[rank_key as keyof Object] !== secondObject[rank_key as keyof Object]) return false;
    }

    return true;
}


// REQUIRES: firstCard and secondCard are Card objects
// EFFECTS: if firstCard < secondCard, return -1. if firstCard > secondCard, return 1. return 0 otherwise
// USAGE: cardsArray.sort(compareCards);
function compareCards(firstCard: Card, secondCard: Card): number {
    // COMMENTS: first rank has priority
    let copiedFirstRank: Rank = Object.assign({}, firstCard.getRank);
    let copiedSecondRank: Rank = Object.assign({}, secondCard.getRank);
    switch (compareTwoRanks(copiedFirstRank, copiedSecondRank)) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            // COMMENTS: if ranks are equal, suits have priority
            let copiedFirstSuit: Suit = Object.assign({}, firstCard.getSuit);
            let copiedSecondSuitk: Suit = Object.assign({}, secondCard.getSuit);
            return compareTwoSuits(copiedFirstSuit, copiedSecondSuitk);
    }
}


export { objectsAreEqual, compareCards}