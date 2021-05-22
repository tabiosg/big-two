"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var AllCards_js_1 = require("./AllCards.js");
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
        this.addCardToDeck(AllCards_js_1.ThreeD());
        this.addCardToDeck(AllCards_js_1.ThreeC());
        this.addCardToDeck(AllCards_js_1.ThreeH());
        this.addCardToDeck(AllCards_js_1.ThreeS());
        this.addCardToDeck(AllCards_js_1.FourD());
        this.addCardToDeck(AllCards_js_1.FourC());
        this.addCardToDeck(AllCards_js_1.FourH());
        this.addCardToDeck(AllCards_js_1.FourS());
        this.addCardToDeck(AllCards_js_1.FiveD());
        this.addCardToDeck(AllCards_js_1.FiveC());
        this.addCardToDeck(AllCards_js_1.FiveH());
        this.addCardToDeck(AllCards_js_1.FiveS());
        this.addCardToDeck(AllCards_js_1.SixD());
        this.addCardToDeck(AllCards_js_1.SixC());
        this.addCardToDeck(AllCards_js_1.SixH());
        this.addCardToDeck(AllCards_js_1.SixS());
        this.addCardToDeck(AllCards_js_1.SevenD());
        this.addCardToDeck(AllCards_js_1.SevenC());
        this.addCardToDeck(AllCards_js_1.SevenH());
        this.addCardToDeck(AllCards_js_1.SevenS());
        this.addCardToDeck(AllCards_js_1.EightD());
        this.addCardToDeck(AllCards_js_1.EightC());
        this.addCardToDeck(AllCards_js_1.EightH());
        this.addCardToDeck(AllCards_js_1.EightS());
        this.addCardToDeck(AllCards_js_1.NineD());
        this.addCardToDeck(AllCards_js_1.NineC());
        this.addCardToDeck(AllCards_js_1.NineH());
        this.addCardToDeck(AllCards_js_1.NineS());
        this.addCardToDeck(AllCards_js_1.TenD());
        this.addCardToDeck(AllCards_js_1.TenC());
        this.addCardToDeck(AllCards_js_1.TenH());
        this.addCardToDeck(AllCards_js_1.TenS());
        this.addCardToDeck(AllCards_js_1.JackD());
        this.addCardToDeck(AllCards_js_1.JackC());
        this.addCardToDeck(AllCards_js_1.JackH());
        this.addCardToDeck(AllCards_js_1.JackS());
        this.addCardToDeck(AllCards_js_1.QueenD());
        this.addCardToDeck(AllCards_js_1.QueenC());
        this.addCardToDeck(AllCards_js_1.QueenH());
        this.addCardToDeck(AllCards_js_1.QueenS());
        this.addCardToDeck(AllCards_js_1.KingD());
        this.addCardToDeck(AllCards_js_1.KingC());
        this.addCardToDeck(AllCards_js_1.KingH());
        this.addCardToDeck(AllCards_js_1.KingS());
        this.addCardToDeck(AllCards_js_1.AceD());
        this.addCardToDeck(AllCards_js_1.AceC());
        this.addCardToDeck(AllCards_js_1.AceH());
        this.addCardToDeck(AllCards_js_1.AceS());
        this.addCardToDeck(AllCards_js_1.TwoD());
        this.addCardToDeck(AllCards_js_1.TwoC());
        this.addCardToDeck(AllCards_js_1.TwoH());
        this.addCardToDeck(AllCards_js_1.TwoS());
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map