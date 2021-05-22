import { Card } from './Card.js';
import { RANK_OBJECT } from './Rank.js';
import { SUIT_OBJECT } from './Suit.js';
import {
    ThreeD, ThreeC, ThreeH, ThreeS,
    FourD, FourC, FourH, FourS,
    FiveD, FiveC, FiveH, FiveS,
    SixD, SixC, SixH, SixS,
    SevenD, SevenC, SevenH, SevenS,
    EightD, EightC, EightH, EightS,
    NineD, NineC, NineH, NineS,
    TenD, TenC, TenH, TenS,
    JackD, JackC, JackH, JackS,
    QueenD, QueenC, QueenH, QueenS,
    KingD, KingC, KingH, KingS,
    AceD, AceC, AceH, AceS,
    TwoD, TwoC, TwoH, TwoS
} from './AllCards.js';

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
        this.allCards.push(addedCard);
    }
    

    // EFFECTS: resets the Deck to have all cards
    resetDeck(): void {
        this.allCards = [];

        this.addCardToDeck(ThreeD());
        this.addCardToDeck(ThreeC());
        this.addCardToDeck(ThreeH());
        this.addCardToDeck(ThreeS());

        this.addCardToDeck(FourD());
        this.addCardToDeck(FourC());
        this.addCardToDeck(FourH());
        this.addCardToDeck(FourS());

        this.addCardToDeck(FiveD());
        this.addCardToDeck(FiveC());
        this.addCardToDeck(FiveH());
        this.addCardToDeck(FiveS());

        this.addCardToDeck(SixD());
        this.addCardToDeck(SixC());
        this.addCardToDeck(SixH());
        this.addCardToDeck(SixS());

        this.addCardToDeck(SevenD());
        this.addCardToDeck(SevenC());
        this.addCardToDeck(SevenH());
        this.addCardToDeck(SevenS());

        this.addCardToDeck(EightD());
        this.addCardToDeck(EightC());
        this.addCardToDeck(EightH());
        this.addCardToDeck(EightS());

        this.addCardToDeck(NineD());
        this.addCardToDeck(NineC());
        this.addCardToDeck(NineH());
        this.addCardToDeck(NineS());

        this.addCardToDeck(TenD());
        this.addCardToDeck(TenC());
        this.addCardToDeck(TenH());
        this.addCardToDeck(TenS());

        this.addCardToDeck(JackD());
        this.addCardToDeck(JackC());
        this.addCardToDeck(JackH());
        this.addCardToDeck(JackS());

        this.addCardToDeck(QueenD());
        this.addCardToDeck(QueenC());
        this.addCardToDeck(QueenH());
        this.addCardToDeck(QueenS());

        this.addCardToDeck(KingD());
        this.addCardToDeck(KingC());
        this.addCardToDeck(KingH());
        this.addCardToDeck(KingS());

        this.addCardToDeck(AceD());
        this.addCardToDeck(AceC());
        this.addCardToDeck(AceH());
        this.addCardToDeck(AceS());

        this.addCardToDeck(TwoD());
        this.addCardToDeck(TwoC());
        this.addCardToDeck(TwoH());
        this.addCardToDeck(TwoS());
    }
}

export {Deck}