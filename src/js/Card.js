"use strict";
exports.__esModule = true;
exports.ThreeD = exports.Card = void 0;
var Rank_js_1 = require("./Rank.js");
var Suit_js_1 = require("./Suit.js");
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
        this.name = "".concat(this.rank.getRankName(), " of ").concat(this.suit.getSuitName());
    }
    //EFFECTS: returns Suit object of card
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    //EFFECTS: returns Suit string of card
    Card.prototype.getSuitName = function () {
        return this.suit.getSuitName();
    };
    //EFFECTS: returns Rank object of card
    Card.prototype.getRank = function () {
        return this.rank;
    };
    //EFFECTS: returns Rank string of card
    Card.prototype.getRankName = function () {
        return this.rank.getRankName();
    };
    //EFFECTS: returns name of card
    Card.prototype.getName = function () {
        return this.name;
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same suit as otherCard, false otherwise
    Card.prototype.hasSameSuitAs = function (otherCard) {
        return this.suit.isSameSuitAs(otherCard.getSuit());
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better suit than otherCard, false otherwise
    Card.prototype.hasBetterSuitThan = function (otherCard) {
        return this.suit.isBetterSuitThan(otherCard.getSuit());
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    Card.prototype.hasSameRankAs = function (otherCard) {
        return this.rank.isSameRankAs(otherCard.getRank());
    };
    //REQUIRES: otherCard is a Card object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    Card.prototype.hasBetterRankThan = function (otherCard) {
        return this.rank.isBetterRankThan(otherCard.getRank());
    };
    // REQUIRES: otherCard is a Card object
    // EFFECTS: returns true if this card is equal to the other card
    Card.prototype.isEqualTo = function (otherCard) {
        return this.suit === otherCard.suit && this.rank === otherCard.rank;
    };
    Card.compareCards = function (firstCard, secondCard) {
        // COMMENTS: first rank has priority
        switch (Rank_js_1.Rank.compareTwoRanks(firstCard.getRank(), secondCard.getRank())) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                // COMMENTS: if ranks are equal, suits have priority
                return Suit_js_1.Suit.compareTwoSuits(firstCard.getSuit(), secondCard.getSuit());
        }
    };
    return Card;
}());
exports.Card = Card;
function ThreeD() {
    return new Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.DIAMONDS);
}
exports.ThreeD = ThreeD;
