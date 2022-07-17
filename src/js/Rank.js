"use strict";
exports.__esModule = true;
exports.Rank = exports.RANK_OBJECT = void 0;
var Rank = /** @class */ (function () {
    // REQUIRES: stringRank is a string
    // EXAMPLES: stringRank1 = "Ace", stringRank2 = "Eight"
    function Rank(stringRank) {
        this.name = stringRank;
        Rank.rankStrengths = new Map([
            ["Three", 0],
            ["Four", 1],
            ["Five", 2],
            ["Six", 3],
            ["Seven", 4],
            ["Eight", 5],
            ["Nine", 6],
            ["Ten", 7],
            ["Jack", 8],
            ["Queen", 9],
            ["King", 10],
            ["Ace", 11],
            ["Two", 12],
        ]);
    }
    //EFFECTS: returns a string of this rank
    Rank.prototype.getRankName = function () {
        return this.name;
    };
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    Rank.prototype.isSameRankAs = function (otherRank) {
        return this.name == otherRank.name;
    };
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    Rank.prototype.isBetterRankThan = function (otherRank) {
        // COMMENTS: these strength variables represent the importance of ranks
        var firstRankStrength = Rank.rankStrengths.get(this.name);
        var secondRankStrength = Rank.rankStrengths.get(otherRank.name);
        return firstRankStrength > secondRankStrength;
    };
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: if this < otherRank, return -1. if this > other_suit, return 1. return 0 otherwise
    Rank.prototype.compareToTheRank = function (otherRank) {
        return Rank.compareTwoRanks(this, otherRank);
    };
    //REQUIRES: firstRank and secondRank are Rank objects
    //EFFECTS: if firstRank < secondRank, return -1. if firstRank > secondRank, return 1. return 0 otherwise
    //USAGE: ranksVector.sort(Rank.compareTwoRanks);
    Rank.compareTwoRanks = function (firstRank, secondRank) {
        // COMMENTS: these strength variables represent the importance of rank
        var firstRankStrength = Rank.rankStrengths.get(firstRank.getRankName());
        var secondRankStrength = Rank.rankStrengths.get(secondRank.getRankName());
        // COMMENTS: go compare
        if (firstRankStrength < secondRankStrength)
            return -1;
        else if (firstRankStrength == secondRankStrength) {
            return 0;
        }
        return 1;
    };
    return Rank;
}());
exports.Rank = Rank;
// USAGE: used in getting rank objects
var RANK_OBJECT = {
    THREE: new Rank("Three"),
    FOUR: new Rank("Four"),
    FIVE: new Rank("Five"),
    SIX: new Rank("Six"),
    SEVEN: new Rank("Seven"),
    EIGHT: new Rank("Eight"),
    NINE: new Rank("Nine"),
    TEN: new Rank("Ten"),
    JACK: new Rank("Jack"),
    QUEEN: new Rank("Queen"),
    KING: new Rank("King"),
    ACE: new Rank("Ace"),
    TWO: new Rank("Two")
};
exports.RANK_OBJECT = RANK_OBJECT;
