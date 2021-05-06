import { Card } from './Card.js';
import { RANK_OBJECT } from './Rank.js';
import { SUIT_OBJECT } from './Suit.js';

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
        return this.allCards.pop()!;
    }

    // REQUIRES: addedCard is a Card object
    // EFFECTS: addsCardToDeck
    addCardToDeck(addedCard: Card): void {
        let copiedCard: Card = Object.assign({}, addedCard);
        this.allCards.push(copiedCard);
    }
    

    // EFFECTS: resets the Deck to have all cards
    resetDeck(): void {
        this.allCards = [];

        this.addCardToDeck(new Card(RANK_OBJECT.THREE, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.THREE, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.THREE, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.THREE, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.SIX, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.SIX, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.SIX, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.SIX, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.NINE, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.NINE, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.NINE, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.NINE, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.TEN, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.TEN, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.TEN, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.TEN, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.JACK, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.JACK, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.JACK, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.JACK, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.KING, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.KING, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.KING, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.KING, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.ACE, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.ACE, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.ACE, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.ACE, SUIT_OBJECT.SPADES));

        this.addCardToDeck(new Card(RANK_OBJECT.TWO, SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card(RANK_OBJECT.TWO, SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card(RANK_OBJECT.TWO, SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card(RANK_OBJECT.TWO, SUIT_OBJECT.SPADES));

    }
}

export {Deck}