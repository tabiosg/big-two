"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Deck_js_1 = require("./Deck.js");
var Hand_js_1 = require("./Hand.js");
var ChangeLayout_js_1 = require("./ChangeLayout.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the game class */
//
//
/////////////////////////////////
var Game = /** @class */ (function () {
    // REQUIRES: _handOnTable represents an array of HTML elements representing the card slots on the table
    function Game(_cardObjectsArray) {
        this.allPlayers = [];
        this.cardDeck = new Deck_js_1.Deck;
        this.cardObjectsArray = _cardObjectsArray;
    }
    // REQUIRES: addedPlayer is a Player object
    // EFFECTS: adds player to allPlayers
    Game.prototype.addPlayer = function (addedPlayer) {
        this.allPlayers.push(addedPlayer);
    };
    // REQUIRES: there are four players
    // EFFECTS: shuffles order of players
    // NOTES: this type of shuffle is called the Fisher-Yates shuffle
    // NOTES: no need to shuffle the players for the current release/version of the game
    Game.prototype.shufflePlayers = function () {
        var currentIndex = this.allPlayers.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // COMMENTS: pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // COMMENTS: swap picked element with the current element.
            temporaryValue = this.allPlayers[currentIndex];
            this.allPlayers[currentIndex] = this.allPlayers[randomIndex];
            this.allPlayers[randomIndex] = temporaryValue;
        }
    };
    // REQUIRES: deck is not empty
    // EFFECTS: deals top card from deck to player
    Game.prototype.dealCardTo = function (receivingPlayer) {
        var cardBeingTransferred = this.cardDeck.removeCardFromTop();
        var copiedCard = Object.assign({}, cardBeingTransferred);
        receivingPlayer.addCardToPlayer(copiedCard);
    };
    // REQUIRES: addedPlayer is a Player object and cardDeck is reset
    // EFFECTS: adds player to allPlayers
    Game.prototype.startGame = function () {
        // COMMENTS: enter dealing phase
        this.cardDeck.shuffleDeck();
        for (var i = 0; i < 13; ++i) {
            this.dealCardTo(this.allPlayers[0]);
            this.dealCardTo(this.allPlayers[1]);
            this.dealCardTo(this.allPlayers[2]);
            this.dealCardTo(this.allPlayers[3]);
        }
        // COMMENTS: player with three of diamonds starts
        var turnPlayer = 0;
        for (var i = 1; i < 4; ++i) {
            if (this.allPlayers[i].hasThreeOfDiamonds()) {
                turnPlayer = i;
                break;
            }
        }
        var needToCheckForThreeOfDiamonds = true;
        // COMMENTS: continue forever. each while loop represents one event
        while (true) {
            var playedHand = new Hand_js_1.Hand;
            var selectedCardsByPlayer = void 0;
            // COMMENTS: play initial cards to start off the round/event
            if (needToCheckForThreeOfDiamonds) {
                selectedCardsByPlayer = this.allPlayers[turnPlayer].selectFirstCardIndicesThreeOfDiamonds();
                needToCheckForThreeOfDiamonds = false;
            }
            else {
                selectedCardsByPlayer = this.allPlayers[turnPlayer].selectFirstCardIndicesNormal();
            }
            playedHand = this.allPlayers[turnPlayer].playCards(selectedCardsByPlayer);
            ChangeLayout_js_1.changeTableLayout(playedHand, this.cardObjectsArray);
            // COMMENTS: need to check if player ran out of cards and has won
            if (this.allPlayers[turnPlayer].allCards.length == 0) {
                this.announceWinner(this.allPlayers[turnPlayer]);
                return;
            }
            var bestHandPlayedSoFar = playedHand;
            var mostRecentPlayerWhoPlayed = turnPlayer;
            // COMMENTS: if not everyone has played yet, move on to the next player normally.
            // COMMENTS: once all the players had their turn, return to the start with the first player
            turnPlayer = (turnPlayer < 3) ? turnPlayer + 1 : 0;
            // COMMENTS: this is everything after the initial cards were played
            while (mostRecentPlayerWhoPlayed != turnPlayer) {
                var followedCards = this.allPlayers[turnPlayer].selectIndicesFollowUp(bestHandPlayedSoFar);
                var handRequestedToPlay = this.allPlayers[turnPlayer].playCards(followedCards);
                // COMMENTS: if player requests to play a hand, but it does not beat the current best ...
                // COMMENTS: then just ignore it and treat it as the player skipping
                if (followedCards.length != 0) {
                    bestHandPlayedSoFar = handRequestedToPlay;
                    ChangeLayout_js_1.changeTableLayout(bestHandPlayedSoFar, this.cardObjectsArray);
                    mostRecentPlayerWhoPlayed =
                        (mostRecentPlayerWhoPlayed < 3) ? mostRecentPlayerWhoPlayed + 1 : 0;
                    // COMMENTS: need to check if player ran out of cards and has won
                    if (this.allPlayers[turnPlayer].allCards.length == 0) {
                        this.announceWinner(this.allPlayers[turnPlayer]);
                        return;
                    }
                }
                // COMMENTS: if not everyone has played yet, move on to the next player normally.
                // COMMENTS: once all the players had their turn, return to the start with the first player
                turnPlayer = (turnPlayer < 3) ? turnPlayer + 1 : 0;
            }
            ChangeLayout_js_1.resetTableLayout(this.cardObjectsArray);
        }
    };
    // EFFECTS: announces winner
    Game.prototype.announceWinner = function (winner) {
        alert("Somebody is the winner!");
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map