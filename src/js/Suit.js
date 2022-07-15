"use strict";
exports.__esModule = true;
exports.Suit = exports.Suit.suitString = exports.SUIT_OBJECT = exports.Suit.compareTwoSuits = void 0;
// USAGE: used in ordered ranks
// NOTES: 2662, 2667, 2661, 2664 for black and white, 2666, 2663, 2665, 2660 for color
var Suit.suitString;
(function (Suit.suitString) {
    Suit.suitString["DIAMONDS"] = "Diamonds";
    Suit.suitString["CLUBS"] = "Clubs";
    Suit.suitString["HEARTS"] = "Hearts";
    Suit.suitString["SPADES"] = "Spades";
})(Suit.suitString || (Suit.suitString = {}));
exports.Suit.suitString = Suit.suitString;
// USAGE: used as a map to get a suit's strength
var SUIT_STRENGTHS = new Map();
SUIT_STRENGTHS.set("Diamonds", 0);
SUIT_STRENGTHS.set("Clubs", 1);
SUIT_STRENGTHS.set("Hearts", 2);
SUIT_STRENGTHS.set("Spades", 3);
var Suit = /** @class */ (function () {
    // REQUIRES: stringSuit is a string
    // EXAMPLES: stringSuit = "Spades", stringRank2 = SUIT.SPADES
    function Suit(stringSuit) {
        this.name = stringSuit;
    }
    // EFFECTS: returns a string of this suit
    Suit.prototype.getSuitName = function () {
        return this.name;
    };
    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: returns true if this object has same suit as otherCard, false otherwise
    Suit.prototype.isSameSuitAs = function (otherSuit) {
        return this.name == otherSuit.name;
    };
    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: returns true if this object has better suit than otherCard, false otherwise
    Suit.prototype.isBetterSuitThan = function (otherSuit) {
        // COMMENTS: these strength variables represent the importance of suits
        var first_suit_strength = SUIT_STRENGTHS.get(this.name);
        var second_suit_strength = SUIT_STRENGTHS.get(otherSuit.name);
        return first_suit_strength > second_suit_strength;
    };
    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: if this < other_suit, return -1. if this > other_suit, return 1. return 0 otherwise
    Suit.prototype.compareToTheSuit = function (otherSuit) {
        return Suit.compareTwoSuits(this, otherSuit);
    };
    return Suit;
}());
exports.Suit = Suit;
// REQUIRES: firstSuit and secondSuit are Suit objects
// EFFECTS: if firstSuit < secondSuit, return -1. if firstSuit > secondSuit, return 1. return 0 otherwise
// USAGE: suitsVector.sort(Suit.compareTwoSuits);
function Suit.compareTwoSuits(firstSuit, secondSuit) {
    // COMMENTS: these strength variables represent the importance of suits
    var firstSuitStrength = SUIT_STRENGTHS.get(firstSuit.getSuitName());
    var secondSuitStrength = SUIT_STRENGTHS.get(secondSuit.getSuitName());
    // COMMENTS: go compare
    if (firstSuitStrength < secondSuitStrength)
        return -1;
    else if (firstSuitStrength == secondSuitStrength) {
        return 0;
    }
    return 1;
}
exports.Suit.compareTwoSuits = Suit.compareTwoSuits;
// USAGE: used in getting suit objects
var SUIT_OBJECT = {
    DIAMONDS: new Suit(Suit.suitString.DIAMONDS),
    CLUBS: new Suit(Suit.suitString.CLUBS),
    HEARTS: new Suit(Suit.suitString.HEARTS),
    SPADES: new Suit(Suit.suitString.SPADES)
};
exports.SUIT_OBJECT = SUIT_OBJECT;
