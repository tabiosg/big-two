import { Card } from './Card.js';
import { Rank } from './Rank.js';
import { Suit } from './Suit.js';

/////////////////////////////////
//
//
/* SECTION BELOW: this is the deck class */
//
//
/////////////////////////////////

class Deck {
    // COMMENTS: these are the member variables of Deck
    private allCards: Array<Card>;

    constructor() {
        this.allCards = [];
        this.resetDeck();
    }

    // REQUIRES: deck has all 52 cards
    // EFFECTS: shuffles deck of cards
    // NOTES: this type of shuffle is called the Fisher-Yates shuffle
    shuffleDeck(): void {
        let currentIndex: number = this.allCards.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            // COMMENTS: pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // COMMENTS: swap picked element with the current element.
            temporaryValue = this.allCards[currentIndex];
            this.allCards[currentIndex] = this.allCards[randomIndex];
            this.allCards[randomIndex] = temporaryValue;
        }
    }

    // REQUIRES: deck is not empty
    // EFFECTS: removes and returns top Card from deck
    removeCardFromTop(): Card {
        return this.allCards.pop();
    }

    // REQUIRES: addedCard is a Card object
    // EFFECTS: addsCardToDeck
    addCardToDeck(addedCard: Card): void {
        this.allCards.push(addedCard);
    }
    
    // EFFECTS: resets the Deck to have all cards
    resetDeck(): void {
        this.allCards = [];

        for (const rankString of Object.values(Rank.rankStrings)) {
            for (const suitString of Object.values(Suit.suitStrings)) {
                this.addCardToDeck(new Card(new Rank(rankString), new Suit(suitString)));
            }
        }
    }
}

export {Deck}