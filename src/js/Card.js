"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
/////////////////////////////////
//
//
/* SECTION BELOW: this is the card class */
//
//
/////////////////////////////////
var Card = /** @class */ (function () {
    // REQUIRES: rank is a Rank object and suit is a Suit object
    function Card(rank, suit) {
        this.suit = suit;
        this.rank = rank;
        this.name = this.rank.getRankName + " of " + this.suit.getSuitName;
    }
    Object.defineProperty(Card.prototype, "getSuit", {
        //EFFECTS: returns Suit object of card
        get: function () {
            return this.suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "getSuitName", {
        //EFFECTS: returns Suit string of card
        get: function () {
            return this.suit.getSuitName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "getRank", {
        //EFFECTS: returns Rank object of card
        get: function () {
            return this.rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "getRankName", {
        //EFFECTS: returns Rank string of card
        get: function () {
            return this.rank.getRankName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "getName", {
        //EFFECTS: returns name of card
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same suit as otherCard, false otherwise
    Card.prototype.hasSameSuitAs = function (otherCard) {
        return this.suit.isSameSuitAs(otherCard.getSuit);
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better suit than otherCard, false otherwise
    Card.prototype.hasBetterSuitThan = function (otherCard) {
        return this.suit.isBetterSuitThan(otherCard.getSuit);
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    Card.prototype.hasSameRankAs = function (otherCard) {
        return this.rank.isSameRankAs(otherCard.getRank);
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    Card.prototype.hasBetterRankThan = function (otherCard) {
        return this.rank.isBetterRankThan(otherCard.getRank);
    };
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map