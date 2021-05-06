"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        var copiedCard = Object.assign({}, addedCard);
        this.allCards.push(copiedCard);
    };
    // EFFECTS: resets the Deck to have all cards
    Deck.prototype.resetDeck = function () {
        this.allCards = [];
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.SPADES));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.DIAMONDS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.CLUBS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.HEARTS));
        this.addCardToDeck(new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.SPADES));
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map