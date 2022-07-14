"use strict";
exports.__esModule = true;
exports.Hand = void 0;
var Card_js_1 = require("./Card.js");
var Rank_js_1 = require("./Rank.js");
var Suit_js_1 = require("./Suit.js");
var Sort_js_1 = require("./Sort.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the hand class */
//
//
/////////////////////////////////
var Hand = /** @class */ (function () {
    function Hand() {
        this.cardObjectsInHand = [];
        this.numberCardsInHand = 0;
    }
    //EFFECTS: returns number of Card objects in hand
    Hand.prototype.getSize = function () {
        return this.numberCardsInHand;
    };
    //EFFECTS: returns array of cards
    Hand.prototype.getCardObjectsInHand = function () {
        return this.cardObjectsInHand;
    };
    // EFFECTS: returns true if hand has three of diamonds
    Hand.prototype.hasThreeOfDiamonds = function () {
        var cardThreeOfDiamonds = new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.DIAMONDS);
        for (var i = 0; i < this.numberCardsInHand; ++i) {
            if ((0, Sort_js_1.objectsAreEqual)(this.cardObjectsInHand[i], cardThreeOfDiamonds))
                return true;
        }
        return false;
    };
    // REQUIRES: addedCard is a Card object
    // EFFECTS: adds addedCard to cardObjectsInHand
    Hand.prototype.addCardToHand = function (addedCard) {
        this.cardObjectsInHand.push(addedCard);
        ++this.numberCardsInHand;
        // FUTURE: addCardToPlayer currently sorts this.allCards, but this may change in future
        this.cardObjectsInHand.sort(Sort_js_1.compareCards);
    };
    // EFFECTS: returns true if cardHand is a single card, false otherwise
    Hand.prototype.isSingleCard = function () {
        // COMMENTS: check if played cards is proper length
        return this.numberCardsInHand == 1;
    };
    // EFFECTS: returns true if cardHand is a pair of cards, false otherwise
    Hand.prototype.isPair = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 2)
            return false;
        // COMMENTS: check if both cards are same rank
        return this.cardObjectsInHand[0].hasSameRankAs(this.cardObjectsInHand[1]);
    };
    // EFFECTS: returns true if cardHand is three of a kind, false otherwise
    Hand.prototype.isThreeOfAKind = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 3)
            return false;
        // COMMENTS: check if all three cards are same rank
        return this.cardObjectsInHand[0].hasSameRankAs(this.cardObjectsInHand[1])
            && this.cardObjectsInHand[0].hasSameRankAs(this.cardObjectsInHand[2]);
    };
    // EFFECTS: returns true if cardHand is a four of a kind, false otherwise
    Hand.prototype.isFourOfAKind = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 5)
            return false;
        // COMMENTS: check if middle three cards are same rank (this works since it's a sorted hand)
        if (!this.cardObjectsInHand[1].hasSameRankAs(this.cardObjectsInHand[2]))
            return false;
        if (!this.cardObjectsInHand[2].hasSameRankAs(this.cardObjectsInHand[3]))
            return false;
        // COMMENTS: check if either end cards are equal to the center card
        return this.cardObjectsInHand[0].hasSameRankAs(this.cardObjectsInHand[2])
            || this.cardObjectsInHand[2].hasSameRankAs(this.cardObjectsInHand[4]);
    };
    // EFFECTS: returns true if cardHand is a straight, false otherwise
    Hand.prototype.isStraight = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 5)
            return false;
        // COMMENTS: if cards are not consecutive, then it is false
        if (Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[0].getRankName()) + 1
            != Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[1].getRankName()))
            return false;
        if (Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[1].getRankName()) + 1
            != Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[2].getRankName()))
            return false;
        if (Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[2].getRankName()) + 1
            != Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[3].getRankName()))
            return false;
        if (Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[3].getRankName()) + 1
            != Rank_js_1.RANK_STRENGTHS.get(this.cardObjectsInHand[4].getRankName()))
            return false;
        // COMMENTS: if all cards are consecutive, then it is true
        return true;
    };
    // EFFECTS: returns true if cardHand is a flush, false otherwise
    Hand.prototype.isFlush = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 5)
            return false;
        // COMMENTS: if cards do not have same suit, then it is false
        if (this.cardObjectsInHand[0].getSuitName() != this.cardObjectsInHand[1].getSuitName())
            return false;
        if (this.cardObjectsInHand[1].getSuitName() != this.cardObjectsInHand[2].getSuitName())
            return false;
        if (this.cardObjectsInHand[2].getSuitName() != this.cardObjectsInHand[3].getSuitName())
            return false;
        if (this.cardObjectsInHand[3].getSuitName() != this.cardObjectsInHand[4].getSuitName())
            return false;
        // COMMENTS: if all cards have same suit, then it is true
        return true;
    };
    // EFFECTS: returns true if cardHand is a house, false otherwise
    Hand.prototype.isHouse = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 5)
            return false;
        // COMMENTS: check if first two are same rank and last two are same rank
        if (this.cardObjectsInHand[0].getRankName() != this.cardObjectsInHand[1].getRankName())
            return false;
        if (this.cardObjectsInHand[3].getRankName() != this.cardObjectsInHand[4].getRankName())
            return false;
        // COMMENTS: if middle card has same rank as either first or last cards, then return true
        return (this.cardObjectsInHand[1].getRankName() == this.cardObjectsInHand[2].getRankName())
            || (this.cardObjectsInHand[2].getRankName() == this.cardObjectsInHand[3].getRankName());
    };
    // EFFECTS: returns true if cardHand is a straight flush, false otherwise
    Hand.prototype.isStraightFlush = function () {
        // COMMENTS: check if played cards is proper length
        if (this.numberCardsInHand != 5)
            return false;
        return this.isFlush() && this.isStraight();
    };
    // EFFECTS: returns true if this.cardObjectsInHand is valid start to event, false otherwise
    Hand.prototype.isValidStart = function () {
        switch (this.numberCardsInHand) {
            case 1:
                return this.isSingleCard();
            case 2:
                return this.isPair();
            case 3:
                return this.isThreeOfAKind();
            case 5:
                if (this.isStraight())
                    return true;
                if (this.isFlush())
                    return true;
                if (this.isHouse())
                    return true;
                if (this.isFourOfAKind())
                    return true;
            default:
                return false;
        }
    };
    // REQUIRES: otherHand is a Hand object and this Hand is valid hand
    // EFFECTS: returns true if this Hand is weaker, or beaten by, otherHand. false otherwise
    Hand.prototype.isBeatenBy = function (otherHand) {
        if (!otherHand.isValidStart())
            return false;
        switch (this.numberCardsInHand) {
            case 1:
                if (otherHand.numberCardsInHand != 1)
                    return false;
                if (!otherHand.isSingleCard())
                    return false;
                return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[0], this.cardObjectsInHand[0]) == 1;
            case 2:
                if (otherHand.numberCardsInHand != 2)
                    return false;
                if (!otherHand.isPair())
                    return false;
                return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[0], this.cardObjectsInHand[0]) == 1;
            case 3:
                if (otherHand.numberCardsInHand != 3)
                    return false;
                if (!otherHand.isThreeOfAKind())
                    return false;
                return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[0], this.cardObjectsInHand[0]) == 1;
            case 5:
                if (otherHand.numberCardsInHand != 5)
                    return false;
                if (this.isStraight()) {
                    if (otherHand.isFlush() || otherHand.isHouse() || otherHand.isFourOfAKind())
                        return true;
                    else if (!otherHand.isStraight)
                        return false;
                    // COMMENTS: case where both are straight
                    return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[4], this.cardObjectsInHand[4]) == 1;
                }
                if (this.isFlush()) {
                    if (otherHand.isHouse() || otherHand.isFourOfAKind())
                        return true;
                    else if (!otherHand.isFlush)
                        return false;
                    // COMMENTS: case where both are flush
                    return ((0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[4], this.cardObjectsInHand[4]) == 1)
                        || otherHand.isStraight();
                }
                if (this.isHouse()) {
                    if (otherHand.isFourOfAKind() || (otherHand.isStraightFlush()))
                        return true;
                    else if (!otherHand.isHouse)
                        return false;
                    // COMMENTS: case where both are house
                    return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[2], this.cardObjectsInHand[2]) == 1;
                }
                if (this.isFourOfAKind()) {
                    if (otherHand.isStraightFlush())
                        return true;
                    else if (!otherHand.isFourOfAKind)
                        return false;
                    // COMMENTS: case where both are four of a kind
                    return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[2], this.cardObjectsInHand[2]) == 1;
                }
                // COMMENTS: case where it is straight flush
                if (!otherHand.isStraightFlush())
                    return false;
                // COMMENTS: case where both are straight flushes
                return (0, Sort_js_1.compareCards)(otherHand.cardObjectsInHand[4], this.cardObjectsInHand[4]) == 1;
            default:
                return false;
        }
    };
    return Hand;
}());
exports.Hand = Hand;
