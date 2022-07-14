"use strict";
exports.__esModule = true;
var Game_js_1 = require("./Game.js");
var Player_js_1 = require("./Player.js");
var Reference_js_1 = require("./Reference.js");
/////////////////////////////////
//
//
/* SECTION BELOW: run the entirety of one game */
//
//
/////////////////////////////////
// COMMENTS: at the beginning of the game, every single button should be disabled
(0, Reference_js_1.disableEverySingleButton)();
// COMMENTS: each of the players should be created
var player1 = new Player_js_1.Player(Reference_js_1.player0CardsHTML);
var player2 = new Player_js_1.Player(Reference_js_1.player1CardsHTML);
var player3 = new Player_js_1.Player(Reference_js_1.player2CardsHTML);
var player4 = new Player_js_1.Player(Reference_js_1.player3CardsHTML);
// COMMENTS: create the game and add the players
var game = new Game_js_1.Game(Reference_js_1.mainCardsHTML);
game.addPlayer(player1);
game.addPlayer(player2);
game.addPlayer(player3);
game.addPlayer(player4);
// COMMENTS: when the game starts, you'll need to change several things
Reference_js_1.nextButton.onclick = function () {
    game.doNextAction();
};
