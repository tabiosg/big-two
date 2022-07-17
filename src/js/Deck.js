"use strict";
exports.__esModule = true;
exports.Deck = void 0;
var Card_js_1 = require("./Card.js");
var Rank_js_1 = require("./Rank.js");
var Suit_js_1 = require("./Suit.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the deck class */
//
//
/////////////////////////////////
var Deck = /** @class */ (function () {
    function Deck() {
        this.allCards = [];
        this.resetDeck();
    }
    // REQUIRES: deck has all 52 cards
    // EFFECTS: shuffles deck of cards
    // NOTES: this type of shuffle is called the Fisher-Yates shuffle
    Deck.prototype.shuffleDeck = function () {
        var currentIndex = this.allCards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // COMMENTS: pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // COMMENTS: swap picked element with the current element.
            temporaryValue = this.allCards[currentIndex];
            this.allCards[currentIndex] = this.allCards[randomIndex];
            this.allCards[randomIndex] = temporaryValue;
        }
    };
    // REQUIRES: deck is not empty
    // EFFECTS: removes and returns top Card from deck
    Deck.prototype.removeCardFromTop = function () {
        return this.allCards.pop();
    };
    // REQUIRES: addedCard is a Card object
    // EFFECTS: addsCardToDeck
    Deck.prototype.addCardToDeck = function (addedCard) {
        this.allCards.push(addedCard);
    };
    // EFFECTS: resets the Deck to have all cards
    Deck.prototype.resetDeck = function () {
        this.allCards = [];
        for (var _i = 0, _a = Object.values(Rank_js_1.Rank.rankStrings); _i < _a.length; _i++) {
            var rankString = _a[_i];
            for (var _b = 0, _c = Object.values(Suit_js_1.Suit.suitStrings); _b < _c.length; _b++) {
                var suitString = _c[_b];
                this.addCardToDeck(new Card_js_1.Card(new Rank_js_1.Rank(rankString), new Suit_js_1.Suit(suitString)));
            }
        }
    };
    return Deck;
}());
exports.Deck = Deck;
