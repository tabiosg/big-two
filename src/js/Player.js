"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Sort_js_1 = require("./Sort.js");
var ChangeLayout_js_1 = require("./ChangeLayout.js");
var Hand_js_1 = require("./Hand.js");
var AllCards_js_1 = require("./AllCards.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the player class */
//
//
/////////////////////////////////
var Player = /** @class */ (function () {
    // REQUIRES: _cardObjectsArray is an array of HTML elements representing the player's card slots
    function Player(_cardObjectsArray) {
        this.allCards = [];
        this.cardObjectsArray = _cardObjectsArray;
    }
    // REQUIRES: addedCard is a Card object
    // EFFECTS: adds addedCard to allCards
    Player.prototype.addCardToPlayer = function (addedCard) {
        this.allCards.push(addedCard);
        // FUTURE: addCardToPlayer currently sorts this.allCards, but this may change in future
        this.allCards.sort(Sort_js_1.compareCards);
        ChangeLayout_js_1.changePlayerCardLayout(this.allCards, this.cardObjectsArray);
    };
    // REQUIRES: allCards are sorted and player has cards (should be 13)
    // EFFECTS: returns true if player has three of diamonds, false otherwise
    Player.prototype.hasThreeOfDiamonds = function () {
        var cardThreeOfDiamonds = AllCards_js_1.ThreeD();
        return Sort_js_1.objectsAreEqual(this.allCards[0], cardThreeOfDiamonds);
    };
    // REQUIRES: player is first person to make move
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    Player.prototype.selectFirstCardIndicesNormal = function () {
        var selectedCards = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = ChangeLayout_js_1.letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);
        // COMMENTS: check if created hand would be valid
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart())
            return selectedCards;
        return [0];
    };
    // REQUIRES: player has three of diamonds and must make move
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    Player.prototype.selectFirstCardIndicesThreeOfDiamonds = function () {
        var selectedCards = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = ChangeLayout_js_1.letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);
        // COMMENTS: check if created hand would be valid
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play three of diamonds
        if (createdHand.isValidStart() && createdHand.hasThreeOfDiamonds())
            return selectedCards;
        return [0];
    };
    // REQUIRES: player is following up after other people to play hand
    // REQUIRES: currentBestHand must be valid hand already played
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    Player.prototype.selectIndicesFollowUp = function (currentBestHand) {
        var selectedCards = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = ChangeLayout_js_1.letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);
        // COMMENTS: check if created hand would be valid
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play three of diamonds
        if (createdHand.isValidStart() && currentBestHand.isBeatenBy(createdHand))
            return selectedCards;
        return [];
    };
    // REQUIRES: selectedCardIndices is a sorted array where 0 <= selectedCardIndices.length <= 5;
    // EFFECTS: returns a Hand object showing what player wants to play
    Player.prototype.playCards = function (selectedCardIndices) {
        var playedHand = new Hand_js_1.Hand();
        for (var i = selectedCardIndices.length - 1; i >= 0; --i) {
            // COMMENTS: selectedCardIndices[i] is indexToRemove, this.allCards.splice(...) is playedCard
            var playedCard = this.allCards.splice(selectedCardIndices[i], 1)[0];
            playedHand.addCardToHand(playedCard);
        }
        ChangeLayout_js_1.changePlayerCardLayout(this.allCards, this.cardObjectsArray);
        return playedHand;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map