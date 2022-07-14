"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Card_js_1 = require("./Card.js");
var Sort_js_1 = require("./Sort.js");
var ChangeLayout_js_1 = require("./ChangeLayout.js");
var Hand_js_1 = require("./Hand.js");
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
        (0, ChangeLayout_js_1.hidePlayerCardLayout)(this.allCards, this.cardObjectsArray);
    };
    // REQUIRES: allCards are sorted and player has cards (should be 13)
    // EFFECTS: returns true if player has three of diamonds, false otherwise
    Player.prototype.hasThreeOfDiamonds = function () {
        var cardThreeOfDiamonds = (0, Card_js_1.ThreeD)();
        this.allCards.sort(Sort_js_1.compareCards);
        return (0, Sort_js_1.objectsAreEqual)(this.allCards[0], cardThreeOfDiamonds);
    };
    //EFFECTS: converts card indices into actual hand, empty if not valid
    Player.prototype.turnTrackToArrayThreeOfDiamondsStart = function (trackSelection) {
        var selectedCards = new Array();
        for (var i = 0, j = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart() && createdHand.hasThreeOfDiamonds())
            return selectedCards;
        return [0];
    };
    //EFFECTS: converts card indices into actual hand, empty if not valid
    Player.prototype.turnTrackToArrayRegularStart = function (trackSelection) {
        var selectedCards = new Array();
        for (var i = 0, j = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart())
            return selectedCards;
        return [0];
    };
    //EFFECTS: converts card indices into actual hand, empty if not valid
    Player.prototype.turnTrackToArrayFollowUp = function (bestHandPlayedSoFar, trackSelection) {
        var selectedCards = new Array();
        for (var i = 0, j = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }
        var createdHand = new Hand_js_1.Hand();
        for (var i = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (!bestHandPlayedSoFar.isBeatenBy(createdHand)) {
            selectedCards = new Array();
        }
        return selectedCards;
    };
    // REQUIRES: player is first person to make move
    // EFFECTS: allows player to select cards
    Player.prototype.allowSelectCardIndices = function (trackSelection) {
        (0, ChangeLayout_js_1.revealPlayerCardLayout)(this.allCards, this.cardObjectsArray);
        (0, ChangeLayout_js_1.letPlayerChooseCards)(this.allCards.length, this.cardObjectsArray, trackSelection);
    };
    // EFFECTS: stop player from choosing cards
    Player.prototype.stopPlayerFromChoosingCards = function () {
        (0, ChangeLayout_js_1.hidePlayerCardLayout)(this.allCards, this.cardObjectsArray);
        (0, ChangeLayout_js_1.disableAllButtons)(this.cardObjectsArray);
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
        (0, ChangeLayout_js_1.hidePlayerCardLayout)(this.allCards, this.cardObjectsArray);
        return playedHand;
    };
    return Player;
}());
exports.Player = Player;
