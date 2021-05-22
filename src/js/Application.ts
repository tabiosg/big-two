import { Game } from './Game.js';
import { Player } from './Player.js';
import {
    disableEverySingleButton, mainCardsHTML, player0CardsHTML,
    player1CardsHTML, player2CardsHTML, player3CardsHTML
} from './Reference.js';

/////////////////////////////////
//
//
/* SECTION BELOW: run the entirety of one game */
//
//
/////////////////////////////////

// COMMENTS: at the beginning of the game, every single button should be disabled
disableEverySingleButton();

// COMMENTS: each of the players should be created
let player1 = new Player(player0CardsHTML);
let player2 = new Player(player1CardsHTML);
let player3 = new Player(player2CardsHTML);
let player4 = new Player(player3CardsHTML);

// COMMENTS: create the game and add the players
let game = new Game(mainCardsHTML);
game.addPlayer(player1);
game.addPlayer(player2);
game.addPlayer(player3);
game.addPlayer(player4);

// COMMENTS: when the game starts, you'll need to change several things
game.startGame();