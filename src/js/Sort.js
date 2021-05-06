"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareCards = exports.objectsAreEqual = void 0;
var Rank_js_1 = require("./Rank.js");
var Suit_js_1 = require("./Suit.js");
// REQUIRES: firstRank and secondRank are rank objects
// EFFECTS: returns true if key-value pairs are equivalent
// USAGE: if (objectsAreEqual(rankObject1, rankObject2)) ...
function objectsAreEqual(firstObject, secondObject) {
    // COMMENTS: check if the values match for all corresponding keys
    var allRankKeys = Object.keys(firstObject);
    for (var _i = 0, allRankKeys_1 = allRankKeys; _i < allRankKeys_1.length; _i++) {
        var rank_key = allRankKeys_1[_i];
        if (firstObject[rank_key] !== secondObject[rank_key])
            return false;
    }
    return true;
}
exports.objectsAreEqual = objectsAreEqual;
// REQUIRES: firstCard and secondCard are Card objects
// EFFECTS: if firstCard < secondCard, return -1. if firstCard > secondCard, return 1. return 0 otherwise
// USAGE: cardsArray.sort(compareCards);
function compareCards(firstCard, secondCard) {
    // COMMENTS: first rank has priority
    var copiedFirstRank = Object.assign({}, firstCard.getRank);
    var copiedSecondRank = Object.assign({}, secondCard.getRank);
    switch (Rank_js_1.compareTwoRanks(copiedFirstRank, copiedSecondRank)) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            // COMMENTS: if ranks are equal, suits have priority
            var copiedFirstSuit = Object.assign({}, firstCard.getSuit);
            var copiedSecondSuitk = Object.assign({}, secondCard.getSuit);
            return Suit_js_1.compareTwoSuits(copiedFirstSuit, copiedSecondSuitk);
    }
}
exports.compareCards = compareCards;
//# sourceMappingURL=Sort.js.map