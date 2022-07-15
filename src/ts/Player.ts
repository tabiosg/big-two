import { Card, ThreeD } from './Card.js';
import {
    letPlayerChooseCards, revealPlayerCardLayout, hidePlayerCardLayout,
    disableAllButtons
} from './ChangeLayout.js';
import { Hand } from './Hand.js';

/////////////////////////////////
//
//
/* SECTION BELOW: this is the player class */
//
//
/////////////////////////////////

class Player {
    // COMMENTS: these are the member variables of Player
    private cardObjectsArray: Array<HTMLElement>;
    public allCards: Array<Card>;

    // REQUIRES: _cardObjectsArray is an array of HTML elements representing the player's card slots
    constructor(_cardObjectsArray: Array<HTMLElement>) {
        this.allCards = [];
        this.cardObjectsArray = _cardObjectsArray;
    }

    // REQUIRES: addedCard is a Card object
    // EFFECTS: adds addedCard to allCards
    addCardToPlayer(addedCard: Card): void {
        this.allCards.push(addedCard);

        // FUTURE: addCardToPlayer currently sorts this.allCards, but this may change in future
        this.allCards.sort(Card.compareCards);

        hidePlayerCardLayout(this.allCards, this.cardObjectsArray);
    }

    // REQUIRES: allCards are sorted and player has cards (should be 13)
    // EFFECTS: returns true if player has three of diamonds, false otherwise
    hasThreeOfDiamonds(): boolean {
        let cardThreeOfDiamonds = ThreeD();
        this.allCards.sort(Card.compareCards);
        return this.allCards[0].isEqualTo(cardThreeOfDiamonds);
    }

    //EFFECTS: converts card indices into actual hand, empty if not valid
    turnTrackToArrayThreeOfDiamondsStart(trackSelection: Array<boolean>): Array<number> {
        let selectedCards: Array<number> = new Array<number>();
        for (let i: number = 0, j: number = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }

        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart() && createdHand.hasThreeOfDiamonds()) return selectedCards;
        return [0];
    }

    //EFFECTS: converts card indices into actual hand, empty if not valid
    turnTrackToArrayRegularStart(trackSelection: Array<boolean>): Array<number> {
        let selectedCards: Array<number> = new Array<number>();
        for (let i: number = 0, j: number = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }

        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart()) return selectedCards;
        return [0];
    }

    //EFFECTS: converts card indices into actual hand, empty if not valid
    turnTrackToArrayFollowUp(bestHandPlayedSoFar: Hand, trackSelection: Array<boolean>): Array<number> {
        let selectedCards: Array<number> = new Array<number>();
        for (let i: number = 0, j: number = 0; i < 13 && j < 5; ++i) {
            if (trackSelection[i]) {
                ++j;
                selectedCards.push(i);
            }
        }

        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }
        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (!bestHandPlayedSoFar.isBeatenBy(createdHand)) {
            selectedCards = new Array<number>();
        }
        return selectedCards;
    }

    // REQUIRES: player is first person to make move
    // EFFECTS: allows player to select cards
    allowSelectCardIndices(trackSelection: Array<boolean>): void {
        revealPlayerCardLayout(this.allCards, this.cardObjectsArray);
        letPlayerChooseCards(this.allCards.length, this.cardObjectsArray, trackSelection);
    }

    // EFFECTS: stop player from choosing cards
    stopPlayerFromChoosingCards(): void {
        hidePlayerCardLayout(this.allCards, this.cardObjectsArray);
        disableAllButtons(this.cardObjectsArray);
    }

    // REQUIRES: selectedCardIndices is a sorted array where 0 <= selectedCardIndices.length <= 5;
    // EFFECTS: returns a Hand object showing what player wants to play
    playCards(selectedCardIndices: Array<number>): Hand {
        let playedHand: Hand = new Hand();
        for (let i: number = selectedCardIndices.length - 1; i >= 0; --i) {
            // COMMENTS: selectedCardIndices[i] is indexToRemove, this.allCards.splice(...) is playedCard
            let playedCard: Card = this.allCards.splice(selectedCardIndices[i], 1)[0];
            playedHand.addCardToHand(playedCard);
        }

        hidePlayerCardLayout(this.allCards, this.cardObjectsArray);
        return playedHand;
    }
}

export { Player }