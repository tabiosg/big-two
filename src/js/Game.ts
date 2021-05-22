import { Player } from './Player.js';
import { Deck } from './Deck.js';
import { Hand } from './Hand.js';
import { Card } from './Card.js';
import { changeTableLayout, resetTableLayout } from './ChangeLayout.js';

/////////////////////////////////
//
//
/* SECTION BELOW: this is the game class */
//
//
/////////////////////////////////

class Game {
    // COMMENTS: these are the member variables of Game
    private allPlayers: Array<Player>;
    private cardDeck: Deck;
    private cardObjectsArray: Array<HTMLElement>;

    // REQUIRES: _handOnTable represents an array of HTML elements representing the card slots on the table
    constructor(_cardObjectsArray: Array<HTMLElement>) {
        this.allPlayers = [];
        this.cardDeck = new Deck;
        this.cardObjectsArray = _cardObjectsArray;
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

    // REQUIRES: addedPlayer is a Player object and cardDeck is reset
    // EFFECTS: adds player to allPlayers
    startGame(): void {
        // COMMENTS: enter dealing phase
        this.cardDeck.shuffleDeck();

        for (let i = 0; i < 13; ++i) {
            this.dealCardTo(this.allPlayers[0]);
            this.dealCardTo(this.allPlayers[1]);
            this.dealCardTo(this.allPlayers[2]);
            this.dealCardTo(this.allPlayers[3]);
        }
        /*
        // COMMENTS: player with three of diamonds starts
        let turnPlayer: number = 0; 

        for (let i = 1; i < 4; ++i) {
            if (this.allPlayers[i].hasThreeOfDiamonds()) {
                turnPlayer = i;
                break;
            }
        }

        let needToCheckForThreeOfDiamonds: boolean = true;

        // COMMENTS: continue forever. each while loop represents one event
        while (true) {

            let playedHand: Hand = new Hand;
            let selectedCardsByPlayer: Array<number> = [];
            // COMMENTS: play initial cards to start off the round/event
            if (needToCheckForThreeOfDiamonds) {
                selectedCardsByPlayer = this.allPlayers[turnPlayer].selectFirstCardIndicesThreeOfDiamonds();
                
                needToCheckForThreeOfDiamonds = false;
            }
            else {
                selectedCardsByPlayer = this.allPlayers[turnPlayer].selectFirstCardIndicesNormal();
            }
            playedHand = this.allPlayers[turnPlayer].playCards(selectedCardsByPlayer);
            changeTableLayout(playedHand, this.cardObjectsArray);

            // COMMENTS: need to check if player ran out of cards and has won
            if (this.allPlayers[turnPlayer].allCards.length == 0) {
                this.announceWinner(this.allPlayers[turnPlayer]);
                return;
            }
            
            let bestHandPlayedSoFar: Hand = playedHand;

            let mostRecentPlayerWhoPlayed: number = turnPlayer;
            // COMMENTS: if not everyone has played yet, move on to the next player normally.
            // COMMENTS: once all the players had their turn, return to the start with the first player
            turnPlayer = (turnPlayer < 3) ? turnPlayer + 1 : 0;

            // COMMENTS: this is everything after the initial cards were played
            while (mostRecentPlayerWhoPlayed != turnPlayer) {
                let followedCards: Array<number> = Object.assign({},
                    this.allPlayers[turnPlayer].selectIndicesFollowUp(bestHandPlayedSoFar));


                let handRequestedToPlay: Hand = this.allPlayers[turnPlayer].playCards(followedCards);

                // COMMENTS: if player requests to play a hand, but it does not beat the current best ...
                // COMMENTS: then just ignore it and treat it as the player skipping
                if (followedCards.length != 0) {

                    bestHandPlayedSoFar = handRequestedToPlay;
                    changeTableLayout(bestHandPlayedSoFar, this.cardObjectsArray);

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
            resetTableLayout(this.cardObjectsArray);
        }
        */
    }
    // EFFECTS: announces winner
    announceWinner(winner: Player): void {
        alert(`Somebody is the winner!`);
    }
}

export { Game }
