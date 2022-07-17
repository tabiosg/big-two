"use strict";
exports.__esModule = true;
exports.Suit = void 0;
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
        var first_suit_strength = Suit.suitStrengths.get(this.name);
        var second_suit_strength = Suit.suitStrengths.get(otherSuit.name);
        return first_suit_strength > second_suit_strength;
    };
    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: if this < other_suit, return -1. if this > other_suit, return 1. return 0 otherwise
    Suit.prototype.compareToTheSuit = function (otherSuit) {
        return Suit.compareTwoSuits(this, otherSuit);
    };
    // REQUIRES: firstSuit and secondSuit are Suit objects
    // EFFECTS: if firstSuit < secondSuit, return -1. if firstSuit > secondSuit, return 1. return 0 otherwise
    // USAGE: suitsVector.sort(Suit.compareTwoSuits);
    Suit.compareTwoSuits = function (firstSuit, secondSuit) {
        // COMMENTS: these strength variables represent the importance of suits
        var firstSuitStrength = Suit.suitStrengths.get(firstSuit.getSuitName());
        var secondSuitStrength = Suit.suitStrengths.get(secondSuit.getSuitName());
        // COMMENTS: go compare
        if (firstSuitStrength < secondSuitStrength)
            return -1;
        else if (firstSuitStrength == secondSuitStrength) {
            return 0;
        }
        return 1;
    };
    Suit.suitStrings = [
        "Diamonds",
        "Clubs",
        "Hearts",
        "Spades",
    ];
    Suit.suitStrengths = new Map([
        ["Diamonds", 0],
        ["Clubs", 1],
        ["Hearts", 2],
        ["Spades", 3],
    ]);
    return Suit;
}());
exports.Suit = Suit;
