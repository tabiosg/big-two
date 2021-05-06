"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = exports.RANK_STRENGTHS = exports.RANK_STRING = exports.RANK_OBJECT = exports.compareTwoRanks = void 0;
// USAGE: used in ordered ranks
var RANK_STRING;
(function (RANK_STRING) {
    RANK_STRING["THREE"] = "3";
    RANK_STRING["FOUR"] = "4";
    RANK_STRING["FIVE"] = "5";
    RANK_STRING["SIX"] = "6";
    RANK_STRING["SEVEN"] = "7";
    RANK_STRING["EIGHT"] = "8";
    RANK_STRING["NINE"] = "9";
    RANK_STRING["TEN"] = "10";
    RANK_STRING["JACK"] = "J";
    RANK_STRING["QUEEN"] = "Q";
    RANK_STRING["KING"] = "K";
    RANK_STRING["ACE"] = "A";
    RANK_STRING["TWO"] = "2";
})(RANK_STRING || (RANK_STRING = {}));
exports.RANK_STRING = RANK_STRING;
// USAGE: used as a map to get a rank's strength
var RANK_STRENGTHS = new Map();
exports.RANK_STRENGTHS = RANK_STRENGTHS;
RANK_STRENGTHS.set("3", 0);
RANK_STRENGTHS.set("4", 1);
RANK_STRENGTHS.set("5", 2);
RANK_STRENGTHS.set("6", 3);
RANK_STRENGTHS.set("7", 4);
RANK_STRENGTHS.set("8", 5);
RANK_STRENGTHS.set("9", 6);
RANK_STRENGTHS.set("10", 7);
RANK_STRENGTHS.set("J", 8);
RANK_STRENGTHS.set("Q", 9);
RANK_STRENGTHS.set("K", 10);
RANK_STRENGTHS.set("A", 11);
RANK_STRENGTHS.set("2", 12);
var Rank = /** @class */ (function () {
    // REQUIRES: stringRank is a string
    // EXAMPLES: stringRank1 = "Ace", stringRank2 = "Eight"
    function Rank(stringRank) {
        this.name = stringRank;
    }
    Object.defineProperty(Rank.prototype, "getRankName", {
        //EFFECTS: returns a string of this rank
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    Rank.prototype.isSameRankAs = function (otherRank) {
        return this.name == otherRank.name;
    };
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    Rank.prototype.isBetterRankThan = function (otherRank) {
        // COMMENTS: these strength variables represent the importance of ranks
        var firstRankStrength = RANK_STRENGTHS.get(this.name);
        var secondRankStrength = RANK_STRENGTHS.get(otherRank.name);
        return firstRankStrength > secondRankStrength;
    };
    //REQUIRES: otherRank is a Rank object
    //EFFECTS: if this < otherRank, return -1. if this > other_suit, return 1. return 0 otherwise
    Rank.prototype.compareToTheRank = function (otherRank) {
        return compareTwoRanks(this, otherRank);
    };
    return Rank;
}());
exports.Rank = Rank;
//REQUIRES: firstRank and secondRank are Rank objects
//EFFECTS: if firstRank < secondRank, return -1. if firstRank > secondRank, return 1. return 0 otherwise
//USAGE: ranksVector.sort(compareTwoRanks);
function compareTwoRanks(firstRank, secondRank) {
    // COMMENTS: these strength variables represent the importance of rank
    var firstRankStrength = RANK_STRENGTHS.get(firstRank.getRankName);
    var secondRankStrength = RANK_STRENGTHS.get(secondRank.getRankName);
    // COMMENTS: go compare
    if (firstRankStrength < secondRankStrength)
        return -1;
    else if (firstRankStrength == secondRankStrength) {
        return 0;
    }
    return 1;
}
exports.compareTwoRanks = compareTwoRanks;
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
//# sourceMappingURL=Rank.js.map