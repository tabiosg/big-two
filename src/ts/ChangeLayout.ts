import { Card } from './Card.js';
import { Hand } from './Hand.js';
import { mainCardsHTML, mapCardNameToCSS } from './Reference.js';

/////////////////////////////////
//
//
/* SECTION BELOW: things to deal with changing player card layout */
//
//
/////////////////////////////////

// REQUIRES: cardObject is an HTML element representing a single card slot
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function makeCardSlotEmpty(cardObject: HTMLElement): void {
    // COMMENTS: need to remove any unwanted classes
    cardObject.className = "card card-empty";
}

// REQUIRES: updatedCard is a Card object that is providing the information
// REQUIRES: cardObject is a HTML element representing the card slot to be updated
// EFFECTS: change and update a single card slot based on the updatedCard
function revealSingleCardSlot(updatedCard: Card, cardObject: HTMLElement): void {
    // COMMENTS: change the card object based on the updateCard
    let cardName: string = updatedCard.getName();
    let cssName: string = mapCardNameToCSS.get(cardName);

    cardObject.className = "card " + cssName;
}

// REQUIRES: allCards is an array of Card objects showing all of player's current cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function revealPlayerCardLayout(allCards: Array<Card>, cardObjectsArray: Array<HTMLElement>): void {
    // COMMENTS: first need to make it so that all of player's other cards are empty
    for (let i: number = allCards.length; i < allCards.length + 5 && i < 13; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (let i: number = 0; i < allCards.length; ++i) {
        revealSingleCardSlot(allCards[i], cardObjectsArray[i]);
    }
}

// REQUIRES: cardObject is a HTML element representing the card slot to be updated
// EFFECTS: hide card slot
function hideSingleCardSlot(cardObject: HTMLElement): void {
    cardObject.className = "card " + "card-back";
}

// REQUIRES: allCards is an array of Card objects showing all of player's current cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function hidePlayerCardLayout(allCards: Array<Card>, cardObjectsArray: Array<HTMLElement>): void {
    // COMMENTS: first need to make it so that all of player's other cards are empty
    for (let i: number = allCards.length; i < allCards.length + 5 && i < 13; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (let i: number = 0; i < allCards.length; ++i) {
        hideSingleCardSlot(cardObjectsArray[i]);
    }
}

/////////////////////////////////
//
//
/* SECTION BELOW: things to deal with changing table card layout */
//
//
/////////////////////////////////

// REQUIRES: allCards is an array of Card objects showing best cards played so far
// REQUIRES: cardObjectsArray is an array of HTML elements representing the table's card slots
// EFFECTS: change and update the table's card layout
function changeTableLayout(bestHandSoFar: Hand): void {
    let bestCardsSoFar: Array<Card> = bestHandSoFar.getCardObjectsInHand();

    // COMMENTS: now change each of the cards and update them
    for (let i: number = 0; i < bestCardsSoFar.length; ++i) {
        revealSingleCardSlot(bestCardsSoFar[i], mainCardsHTML[i]);
    }
}

// REQUIRES: cardObjectsArray is an array of HTML elements representing the table's card slots
// EFFECTS: reset the table's card layout
function resetTableLayout(): void {

    // COMMENTS: make all cards empty
    for (let i: number = 0; i < 5; ++i) {
        makeCardSlotEmpty(mainCardsHTML[i]);
    }

}

/////////////////////////////////
//
//
/* SECTION BELOW: things to deal with player selecting cards */
//
//
/////////////////////////////////

// REQUIRES: current player is selecting cards
// REQUIRES: cardAmount is a number showing how many cards player has
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: activate the card object buttons temporarily
function activateButtons(cardAmount: number, cardObjectsArray: Array<HTMLElement>): void {
    // COMMENTS: change the card object based on the updateCard
    for (let i: number = 0; i < cardAmount; ++i) {
        (<HTMLInputElement>cardObjectsArray[i]).disabled = false;
    }
}

// REQUIRES: current player is done cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: disable the card object buttons
function disableAllButtons(cardObjectsArray: Array<HTMLElement>): void {
    // COMMENTS: change the card object based on the updateCard
    for (let i: number = 0; i < 13; ++i) {
        let specificCardObject: HTMLInputElement = <HTMLInputElement>cardObjectsArray[i];
        specificCardObject.disabled = true;
        if (specificCardObject.classList.contains("card-highlighted")) {
            specificCardObject.classList.remove("card-highlighted");
        }
    }
}

// EFFECTS: change card display of a cardObject
function highlightSelectedCard(cardObject: HTMLElement) {
    if (cardObject.classList.contains("card-highlighted")) {
        cardObject.classList.remove("card-highlighted");
    } else {
        cardObject.classList.add("card-highlighted");
    }
}

// EFFECTS: basic sleep function
function sleep(milliseconds): void {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// REQUIRES: current player is selecting cards
// REQUIRES: cardAmount is a number showing how many cards player has
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: let player choose cards
function letPlayerChooseCards(cardAmount: number, cardObjectsArray: Array<HTMLElement>, trackSelection: Array<boolean>): void {
    // COMMENTS: allow user to choose cards
    activateButtons(cardAmount, cardObjectsArray);

    // COMMENTS: this is so that the user can select and unselect the cards
    for (let i: number = 0; i < cardAmount; ++i) {
        cardObjectsArray[i].onclick = function () {
            trackSelection[i] = !trackSelection[i];
            highlightSelectedCard(cardObjectsArray[i]);
        }
    }
}


export {
    changeTableLayout, resetTableLayout, revealPlayerCardLayout, hidePlayerCardLayout,
    letPlayerChooseCards, disableAllButtons
}