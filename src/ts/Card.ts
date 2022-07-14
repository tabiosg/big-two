import { Rank } from './Rank.js';
import { Suit } from './Suit.js';

/////////////////////////////////
//
//
/* SECTION BELOW: this is the card class */
//
//
/////////////////////////////////

class Card {
    // COMMENTS: these are the member variables of Card
    private suit: Suit;
    private rank: Rank;
    private name: string;

    // REQUIRES: rank is a Rank object and suit is a Suit object
    constructor(rank: Rank, suit: Suit) {
        this.suit = suit;
        this.rank = rank;
        this.name = `${this.rank.getRankName} of ${this.suit.getSuitName}`;
    }

    //EFFECTS: returns Suit object of card
    getSuit(): Suit {
        return this.suit;
    }

    //EFFECTS: returns Suit string of card
    getSuitName(): string {
        return this.suit.getSuitName;
    }

    //EFFECTS: returns Rank object of card
    getRank(): Rank {
        return this.rank;
    }

    //EFFECTS: returns Rank string of card
    getRankName(): string {
        return this.rank.getRankName;
    }

    //EFFECTS: returns name of card
    getName(): string {
        return this.name;
    }

    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same suit as otherCard, false otherwise
    hasSameSuitAs(otherCard: Card): boolean {
        return this.suit.isSameSuitAs(otherCard.getSuit);
    }

    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better suit than otherCard, false otherwise
    hasBetterSuitThan(otherCard: Card): boolean {
        return this.suit.isBetterSuitThan(otherCard.getSuit);
    }

    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    hasSameRankAs(otherCard: Card): boolean {
        return this.rank.isSameRankAs(otherCard.getRank);
    }

    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    hasBetterRankThan(otherCard: Card): boolean {
        return this.rank.isBetterRankThan(otherCard.getRank);
    }
}

function ThreeD(): Card {
    return new Card(new Rank("Three"), new Suit("Diamonds"));
}

export { Card, ThreeD }