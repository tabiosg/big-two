"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Deck_js_1 = require("./Deck.js");
var Card_js_1 = require("./Card.js");
var ChangeLayout_js_1 = require("./ChangeLayout.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the game class */
//
//
/////////////////////////////////
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["LOAD_GAME"] = 0] = "LOAD_GAME";
    GAME_STATE[GAME_STATE["REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN"] = 1] = "REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN";
    GAME_STATE[GAME_STATE["REQUEST_CARDS_INITIAL_PLAYER_TURN"] = 2] = "REQUEST_CARDS_INITIAL_PLAYER_TURN";
    GAME_STATE[GAME_STATE["REQUEST_CARDS_FOLLOW_PLAYER_TURN"] = 3] = "REQUEST_CARDS_FOLLOW_PLAYER_TURN";
    GAME_STATE[GAME_STATE["PLAY_CARDS_THREE_OF_DIAMONDS"] = 4] = "PLAY_CARDS_THREE_OF_DIAMONDS";
    GAME_STATE[GAME_STATE["PLAY_CARDS_START_PLAYER_TURN"] = 5] = "PLAY_CARDS_START_PLAYER_TURN";
    GAME_STATE[GAME_STATE["PLAY_CARDS_FOLLOW_PLAYER_TURN"] = 6] = "PLAY_CARDS_FOLLOW_PLAYER_TURN";
    GAME_STATE[GAME_STATE["ANNOUNCE_WINNER"] = 7] = "ANNOUNCE_WINNER";
})(GAME_STATE || (GAME_STATE = {}));
var Game = /** @class */ (function () {
    // REQUIRES: _handOnTable represents an array of HTML elements representing the card slots on the table
    function Game(_cardObjectsArray) {
        this.allPlayers = new Array();
        this.cardDeck = new Deck_js_1.Deck();
        this.cardObjectsArray = _cardObjectsArray;
        this.gameState = GAME_STATE.LOAD_GAME;
        this.trackSelection = new Array();
        for (var i = 0; i < 13; ++i)
            this.trackSelection.push(false);
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
        receivingPlayer.addCardToPlayer(new Card_js_1.Card(cardBeingTransferred.getRank, cardBeingTransferred.getSuit));
    };
    // REQUIRES: time is up and trackSelection represents all cards selected by players
    // EFFECTS: returns an array of numbers showing indices which are desired to be taken out
    Game.prototype.convertTrackSelection = function (trackSelection) {
        var chosenIndices = [];
        for (var i = 0; i < 13; ++i) {
            if (trackSelection[i]) {
                chosenIndices.push(i);
            }
            if (chosenIndices.length >= 5)
                return chosenIndices;
        }
        return chosenIndices;
    };
    Game.prototype.loadGameState = function () {
        // COMMENTS: enter dealing phase
        this.cardDeck.shuffleDeck();
        for (var i = 0; i < 13; ++i) {
            this.dealCardTo(this.allPlayers[0]);
            this.dealCardTo(this.allPlayers[1]);
            this.dealCardTo(this.allPlayers[2]);
            this.dealCardTo(this.allPlayers[3]);
        }
        this.gameState = GAME_STATE.REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN;
    };
    // EFFECTS: change turn player
    Game.prototype.requestThreeOfDiamondsPlayerTurnState = function () {
        // COMMENTS: player with three of diamonds starts
        for (var i = 0; i < 4; ++i) {
            if (this.allPlayers[i].hasThreeOfDiamonds()) {
                this.turnPlayer = i;
            }
        }
        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        this.gameState = GAME_STATE.PLAY_CARDS_THREE_OF_DIAMONDS;
    };
    Game.prototype.requestCardsInitialPlayerTurnState = function () {
        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        this.gameState = GAME_STATE.PLAY_CARDS_START_PLAYER_TURN;
    };
    Game.prototype.requestCardsFollowUpPlayerTurnState = function () {
        if (this.mostRecentPlayerWhoPlayed == this.turnPlayer) {
            ChangeLayout_js_1.resetTableLayout();
            this.gameState = GAME_STATE.REQUEST_CARDS_INITIAL_PLAYER_TURN;
            return;
        }
        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        this.gameState = GAME_STATE.PLAY_CARDS_FOLLOW_PLAYER_TURN;
    };
    Game.prototype.playCardsStart = function (selectedCardsByPlayer) {
        this.allPlayers[this.turnPlayer].stopPlayerFromChoosingCards();
        if (selectedCardsByPlayer.length == 0) {
            this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
            this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
            return;
        }
        this.bestHandPlayedSoFar = this.allPlayers[this.turnPlayer].playCards(selectedCardsByPlayer);
        ChangeLayout_js_1.changeTableLayout(this.bestHandPlayedSoFar);
        // COMMENTS: need to check if player ran out of cards and has won
        if (this.allPlayers[this.turnPlayer].allCards.length == 0) {
            this.gameState = GAME_STATE.ANNOUNCE_WINNER;
            return;
        }
        this.mostRecentPlayerWhoPlayed = this.turnPlayer;
        this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
        for (var i = 0; i < 13; ++i)
            this.trackSelection[i] = false;
        this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
    };
    Game.prototype.playCardsFollow = function () {
        this.allPlayers[this.turnPlayer].stopPlayerFromChoosingCards();
        var selectedCardsByPlayer = this.allPlayers[this.turnPlayer].turnTrackToArrayFollowUp(this.bestHandPlayedSoFar, this.trackSelection);
        if (selectedCardsByPlayer.length == 0) {
            this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
            this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
            return;
        }
        this.bestHandPlayedSoFar = this.allPlayers[this.turnPlayer].playCards(selectedCardsByPlayer);
        ChangeLayout_js_1.changeTableLayout(this.bestHandPlayedSoFar);
        // COMMENTS: need to check if player ran out of cards and has won
        if (this.allPlayers[this.turnPlayer].allCards.length == 0) {
            this.gameState = GAME_STATE.ANNOUNCE_WINNER;
            return;
        }
        this.mostRecentPlayerWhoPlayed = this.turnPlayer;
        this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
        for (var i = 0; i < 13; ++i)
            this.trackSelection[i] = false;
        this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
    };
    Game.prototype.announceWinnerState = function () {
        alert("Somebody is the winner!");
    };
    // EFFECTS: does next action for game to continue
    Game.prototype.doNextAction = function () {
        switch (this.gameState) {
            case GAME_STATE.LOAD_GAME:
                console.log("Load");
                this.loadGameState();
                return;
            case GAME_STATE.REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN:
                console.log("req3");
                this.requestThreeOfDiamondsPlayerTurnState();
                return;
            case GAME_STATE.REQUEST_CARDS_INITIAL_PLAYER_TURN:
                console.log("reqNormal");
                this.requestCardsInitialPlayerTurnState();
                return;
            case GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN:
                console.log("reqFollow");
                this.requestCardsFollowUpPlayerTurnState();
                return;
            case GAME_STATE.PLAY_CARDS_THREE_OF_DIAMONDS:
                console.log("play3");
                var selectedCardsByPlayer = this.allPlayers[this.turnPlayer].turnTrackToArrayRegularStart(this.trackSelection);
                this.playCardsStart(selectedCardsByPlayer);
                return;
            case GAME_STATE.PLAY_CARDS_START_PLAYER_TURN:
                console.log("playNormal");
                selectedCardsByPlayer =
                    this.allPlayers[this.turnPlayer].turnTrackToArrayRegularStart(this.trackSelection);
                this.playCardsStart(selectedCardsByPlayer);
                return;
            case GAME_STATE.PLAY_CARDS_FOLLOW_PLAYER_TURN:
                console.log("playFollow");
                this.playCardsFollow();
                return;
            case GAME_STATE.ANNOUNCE_WINNER:
                console.log("announce");
                this.announceWinnerState();
                return;
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map