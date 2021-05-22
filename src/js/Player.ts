import { Card } from './Card.js';
import { objectsAreEqual, compareCards } from './Sort.js';
import { letPlayerChooseCards, changePlayerCardLayout } from './ChangeLayout.js';
import { Hand } from './Hand.js';
import { ThreeD } from './AllCards.js';

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
        console.log("c");
        this.allCards = [];
        this.cardObjectsArray = _cardObjectsArray;
    }

    // REQUIRES: addedCard is a Card object
    // EFFECTS: adds addedCard to allCards
    addCardToPlayer(addedCard: Card): void {
        this.allCards.push(addedCard);

        // FUTURE: addCardToPlayer currently sorts this.allCards, but this may change in future
        this.allCards.sort(compareCards);

        changePlayerCardLayout(this.allCards, this.cardObjectsArray);
    }

    // REQUIRES: allCards are sorted and player has cards (should be 13)
    // EFFECTS: returns true if player has three of diamonds, false otherwise
    hasThreeOfDiamonds(): boolean {
        let cardThreeOfDiamonds = ThreeD();
        return objectsAreEqual(this.allCards[0], cardThreeOfDiamonds);
    }

    // REQUIRES: player is first person to make move
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    selectFirstCardIndicesNormal(): Array<number> {
        let selectedCards: Array<number> = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);

        // COMMENTS: check if created hand would be valid
        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }

        // COMMENTS: if created hand is valid, then return hand. otherwise, play lowest card.
        if (createdHand.isValidStart()) return selectedCards;
        return [0];
    }

    // REQUIRES: player has three of diamonds and must make move
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    selectFirstCardIndicesThreeOfDiamonds(): Array<number> {
        let selectedCards: Array<number> = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);

        // COMMENTS: check if created hand would be valid
        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }

        // COMMENTS: if created hand is valid, then return hand. otherwise, play three of diamonds
        if (createdHand.isValidStart() && createdHand.hasThreeOfDiamonds()) return selectedCards;
        return [0];
    }

    // REQUIRES: player is following up after other people to play hand
    // REQUIRES: currentBestHand must be valid hand already played
    // EFFECTS: returns an array of numbers showing Card objects which player wants to play, returns [] if skip
    selectIndicesFollowUp(currentBestHand: Hand): Array<number> {
        let selectedCards: Array<number> = [];
        // TODO: On button click, cards should be added or removed from the array
        // TODO: Wait a few seconds
        selectedCards = letPlayerChooseCards(this.allCards.length, this.cardObjectsArray);

        // COMMENTS: check if created hand would be valid
        let createdHand: Hand = new Hand();
        for (let i: number = 0; i < selectedCards.length; ++i) {
            createdHand.addCardToHand(this.allCards[selectedCards[i]]);
        }

        // COMMENTS: if created hand is valid, then return hand. otherwise, play three of diamonds
        if (createdHand.isValidStart() && currentBestHand.isBeatenBy(createdHand)) return selectedCards;
        return [];
    }


    // REQUIRES: selectedCardIndices is a sorted array where 0 <= selectedCardIndices.length <= 5;
    // EFFECTS: returns a Hand object showing what player wants to play
    playCards(selectedCardIndices: Array<number>): Hand {
        let playedHand: Hand = new Hand();
        for (let i: number = selectedCardIndices.length - 1; i >= 0; --i) {
            // COMMENTS: selectedCardIndices[i] is indexToRemove, this.allCards.splice(...) is playedCard
            let playedCard: Card = this.allCards.splice(selectedCardIndices[i], 1)[0];
            console.log(playedCard.getName);
            playedHand.addCardToHand(playedCard);
        }

        changePlayerCardLayout(this.allCards, this.cardObjectsArray);
        return playedHand;
    }
}

export { Player }