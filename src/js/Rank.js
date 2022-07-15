"use strict";
exports.__esModule = true;
exports.Rank = exports.Rank.rankStrengths = exports.RANK_STRING = exports.RANK_OBJECT = exports.Rank.compareTwoRanks = void 0;
// USAGE: used in ordered ranks
var RANK_STRING;
(function (RANK_STRING) {
    RANK_STRING["THREE"] = "Three";
    RANK_STRING["FOUR"] = "Four";
    RANK_STRING["FIVE"] = "Five";
    RANK_STRING["SIX"] = "Six";
    RANK_STRING["SEVEN"] = "Seven";
    RANK_STRING["EIGHT"] = "Eight";
    RANK_STRING["NINE"] = "Nine";
    RANK_STRING["TEN"] = "Ten";
    RANK_STRING["JACK"] = "Jack";
    RANK_STRING["QUEEN"] = "Queen";
    RANK_STRING["KING"] = "King";
    RANK_STRING["ACE"] = "Ace";
    RANK_STRING["TWO"] = "Two";
})(RANK_STRING || (RANK_STRING = {}));
exports.RANK_STRING = RANK_STRING;
// USAGE: used as a map to get a rank's strength
var Rank.rankStrengths = new Map();
exports.Rank.rankStrengths = Rank.rankStrengths;
Rank.rankStrengths.set("Three", 0);
Rank.rankStrengths.set("Four", 1);
Rank.rankStrengths.set("Five", 2);
Rank.rankStrengths.set("Six", 3);
Rank.rankStrengths.set("Seven", 4);
Rank.rankStrengths.set("Eight", 5);
Rank.rankStrengths.set("Nine", 6);
Rank.rankStrengths.set("Ten", 7);
Rank.rankStrengths.set("Jack", 8);
Rank.rankStrengths.set("Queen", 9);
Rank.rankStrengths.set("King", 10);
Rank.rankStrengths.set("Ace", 11);
Rank.rankStrengths.set("Two", 12);
var Rank = /** @class */ (function () {
    // REQUIRES: stringRank is a string
    // EXAMPLES: stringRank1 = "Ace", stringRank2 = "Eight"
    function Rank(stringRank) {
        this.name = stringRank;
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
    return Rank;
}());
exports.Rank = Rank;
//REQUIRES: firstRank and secondRank are Rank objects
//EFFECTS: if firstRank < secondRank, return -1. if firstRank > secondRank, return 1. return 0 otherwise
//USAGE: ranksVector.sort(Rank.compareTwoRanks);
function Rank.compareTwoRanks(firstRank, secondRank) {
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
}
exports.Rank.compareTwoRanks = Rank.compareTwoRanks;
// USAGE: used in getting rank objects
var RANK_OBJECT = {
    THREE: new Rank(RANK_STRING.THREE),
    FOUR: new Rank(RANK_STRING.FOUR),
    FIVE: new Rank(RANK_STRING.FIVE),
    SIX: new Rank(RANK_STRING.SIX),
    SEVEN: new Rank(RANK_STRING.SEVEN),
    EIGHT: new Rank(RANK_STRING.EIGHT),
    NINE: new Rank(RANK_STRING.NINE),
    TEN: new Rank(RANK_STRING.TEN),
    JACK: new Rank(RANK_STRING.JACK),
    QUEEN: new Rank(RANK_STRING.QUEEN),
    KING: new Rank(RANK_STRING.KING),
    ACE: new Rank(RANK_STRING.ACE),
    TWO: new Rank(RANK_STRING.TWO)
};
exports.RANK_OBJECT = RANK_OBJECT;
