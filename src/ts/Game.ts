import { Player } from './Player.js';
import { Deck } from './Deck.js';
import { Hand } from './Hand.js';
import { Card } from './Card.js';
import { changeTableLayout, resetTableLayout } from './ChangeLayout.js';
import { nextButton } from './Reference.js';

/////////////////////////////////
//
//
/* SECTION BELOW: this is the game class */
//
//
/////////////////////////////////

enum GAME_STATE {
    LOAD_GAME,
    REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN,
    REQUEST_CARDS_INITIAL_PLAYER_TURN,
    REQUEST_CARDS_FOLLOW_PLAYER_TURN,
    PLAY_CARDS_THREE_OF_DIAMONDS,
    PLAY_CARDS_START_PLAYER_TURN,
    PLAY_CARDS_FOLLOW_PLAYER_TURN,
    ANNOUNCE_WINNER
}

class Game {
    // COMMENTS: these are the member variables of Game
    private allPlayers: Array<Player>;
    private cardDeck: Deck;
    private cardObjectsArray: Array<HTMLElement>;
    private turnPlayer: number;
    private mostRecentPlayerWhoPlayed: number;
    private gameState: GAME_STATE;
    private bestHandPlayedSoFar: Hand;
    private trackSelection: Array<boolean>;


    // REQUIRES: _handOnTable represents an array of HTML elements representing the card slots on the table
    constructor(_cardObjectsArray: Array<HTMLElement>) {
        this.allPlayers = new Array<Player>();
        this.cardDeck = new Deck();
        this.cardObjectsArray = _cardObjectsArray;
        this.gameState = GAME_STATE.LOAD_GAME;
        this.trackSelection = new Array<boolean>();
        for (let i: number = 0; i < 13; ++i) this.trackSelection.push(false);
    }

    // REQUIRES: addedPlayer is a Player object
    // EFFECTS: adds player to allPlayers
    addPlayer(addedPlayer: Player): void {
        this.allPlayers.push(addedPlayer);
    }

    // REQUIRES: there are four players
    // EFFECTS: shuffles order of players
    // NOTES: this type of shuffle is called the Fisher-Yates shuffle
    // NOTES: no need to shuffle the players for the current release/version of the game
    shufflePlayers(): void {
        let currentIndex: number = this.allPlayers.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            // COMMENTS: pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // COMMENTS: swap picked element with the current element.
            temporaryValue = this.allPlayers[currentIndex];
            this.allPlayers[currentIndex] = this.allPlayers[randomIndex];
            this.allPlayers[randomIndex] = temporaryValue;
        }
    }

    // REQUIRES: deck is not empty
    // EFFECTS: deals top card from deck to player
    dealCardTo(receivingPlayer: Player): void {
        let cardBeingTransferred: Card = this.cardDeck.removeCardFromTop();
        receivingPlayer.addCardToPlayer(new Card(cardBeingTransferred.getRank, cardBeingTransferred.getSuit));
    }

    // REQUIRES: time is up and trackSelection represents all cards selected by players
    // EFFECTS: returns an array of numbers showing indices which are desired to be taken out
    convertTrackSelection(trackSelection: Array<boolean>): Array<number> {
        let chosenIndices: Array<number> = [];
        for (let i: number = 0; i < 13; ++i) {
            if (trackSelection[i]) {
                chosenIndices.push(i);
            }
            if (chosenIndices.length >= 5) return chosenIndices;
        }
        return chosenIndices;
    }


    loadGameState(): void {
        // COMMENTS: enter dealing phase
        this.cardDeck.shuffleDeck();

        for (let i: number = 0; i < 13; ++i) {
            this.dealCardTo(this.allPlayers[0]);
            this.dealCardTo(this.allPlayers[1]);
            this.dealCardTo(this.allPlayers[2]);
            this.dealCardTo(this.allPlayers[3]);
        }
        nextButton.innerText = "Let player choose hand to start off the round (Three of Diamonds required)."
        this.gameState = GAME_STATE.REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN;
    }

    // EFFECTS: change turn player
    requestThreeOfDiamondsPlayerTurnState(): void {

        // COMMENTS: player with three of diamonds starts
        for (let i: number = 0; i < 4; ++i) {
            if (this.allPlayers[i].hasThreeOfDiamonds()) {
                this.turnPlayer = i;
            }
        }

        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        nextButton.innerText = "Play selected cards (Three of Diamonds required)."
        this.gameState = GAME_STATE.PLAY_CARDS_THREE_OF_DIAMONDS;

    }

    requestCardsInitialPlayerTurnState(): void {
        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        nextButton.innerText = "Play selected cards."
        this.gameState = GAME_STATE.PLAY_CARDS_START_PLAYER_TURN;
    }

    requestCardsFollowUpPlayerTurnState(): void {
        if (this.mostRecentPlayerWhoPlayed == this.turnPlayer) {
            resetTableLayout();
            nextButton.innerText = "No one beat this person! Let player choose hand to start off the round."
            this.gameState = GAME_STATE.REQUEST_CARDS_INITIAL_PLAYER_TURN;
            return;
        }

        this.allPlayers[this.turnPlayer].allowSelectCardIndices(this.trackSelection);
        nextButton.innerText = "Play selected cards."
        this.gameState = GAME_STATE.PLAY_CARDS_FOLLOW_PLAYER_TURN;

    }

    playCardsStart(selectedCardsByPlayer: Array<number>): void {
        this.allPlayers[this.turnPlayer].stopPlayerFromChoosingCards();

        if (selectedCardsByPlayer.length == 0) {
            nextButton.innerText = "Let player choose hand to follow."
            this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
            this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
            return;
        }

        this.bestHandPlayedSoFar = this.allPlayers[this.turnPlayer].playCards(selectedCardsByPlayer);
        changeTableLayout(this.bestHandPlayedSoFar);

        // COMMENTS: need to check if player ran out of cards and has won
        if (this.allPlayers[this.turnPlayer].allCards.length == 0) {
            nextButton.innerText = "Announce the winner!"
            this.gameState = GAME_STATE.ANNOUNCE_WINNER;
            return;
        }

        this.mostRecentPlayerWhoPlayed = this.turnPlayer;
        this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;

        for (let i: number = 0; i < 13; ++i) this.trackSelection[i] = false;
        nextButton.innerText = "Let player choose hand to follow."
        this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
    }

    playCardsFollow(): void {
        this.allPlayers[this.turnPlayer].stopPlayerFromChoosingCards();

        let selectedCardsByPlayer: Array<number> =
            this.allPlayers[this.turnPlayer].turnTrackToArrayFollowUp(this.bestHandPlayedSoFar, this.trackSelection);

        if (selectedCardsByPlayer.length == 0) {
            nextButton.innerText = "Let player choose hand to follow."
            this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
            this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;
            return;
        }

        this.bestHandPlayedSoFar = this.allPlayers[this.turnPlayer].playCards(selectedCardsByPlayer);
        changeTableLayout(this.bestHandPlayedSoFar);

        // COMMENTS: need to check if player ran out of cards and has won
        if (this.allPlayers[this.turnPlayer].allCards.length == 0) {
            nextButton.innerText = "Announce the winner!"
            this.gameState = GAME_STATE.ANNOUNCE_WINNER;
            return;
        }

        this.mostRecentPlayerWhoPlayed = this.turnPlayer;
        this.turnPlayer = (this.turnPlayer < 3) ? this.turnPlayer + 1 : 0;

        for (let i: number = 0; i < 13; ++i) this.trackSelection[i] = false;
        nextButton.innerText = "Let player choose hand to follow."
        this.gameState = GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN;
    }

    announceWinnerState(): void {
        alert(`Somebody is the winner!`);
    }

    // EFFECTS: does next action for game to continue
    doNextAction(): void {
        switch (this.gameState) {
            case GAME_STATE.LOAD_GAME:
                this.loadGameState();
                return;
            case GAME_STATE.REQUEST_THREE_OF_DIAMONDS_PLAYER_TURN:
                this.requestThreeOfDiamondsPlayerTurnState();
                return;
            case GAME_STATE.REQUEST_CARDS_INITIAL_PLAYER_TURN:
                this.requestCardsInitialPlayerTurnState();
                return;
            case GAME_STATE.REQUEST_CARDS_FOLLOW_PLAYER_TURN:
                this.requestCardsFollowUpPlayerTurnState();
                return;
            case GAME_STATE.PLAY_CARDS_THREE_OF_DIAMONDS:
                let selectedCardsByPlayer: Array<number> =
                    this.allPlayers[this.turnPlayer].turnTrackToArrayRegularStart(this.trackSelection);
                this.playCardsStart(selectedCardsByPlayer);
                return;
            case GAME_STATE.PLAY_CARDS_START_PLAYER_TURN:
                selectedCardsByPlayer =
                    this.allPlayers[this.turnPlayer].turnTrackToArrayRegularStart(this.trackSelection);
                this.playCardsStart(selectedCardsByPlayer);
                return;
            case GAME_STATE.PLAY_CARDS_FOLLOW_PLAYER_TURN:
                this.playCardsFollow();
                return;
            case GAME_STATE.ANNOUNCE_WINNER:
                this.announceWinnerState();
                return;
        }
    }
}

export { Game }
