"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letPlayerChooseCards = exports.changePlayerCardLayout = exports.resetTableLayout = exports.changeTableLayout = void 0;
var Reference_js_1 = require("./Reference.js");
/////////////////////////////////
//
//
/* SECTION BELOW: things to deal with changing player card layout */
//
//
/////////////////////////////////
// REQUIRES: cardObject is an HTML element representing a single card slot
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function makeCardSlotEmpty(cardObject) {
    // COMMENTS: need to remove any unwanted classes
    cardObject.className = "card card-empty";
}
// REQUIRES: updatedCard is a Card object that is providing the information
// REQUIRES: cardObject is a HTML element representing the card slot to be updated
// EFFECTS: change and update a single card slot based on the updatedCard
function updateSingleCardSlot(updatedCard, cardObject) {
    // COMMENTS: change the card object based on the updateCard
    console.log(updatedCard.getName);
    var cardName = updatedCard.getName;
    var cssName = Reference_js_1.mapCardNameToCSS.get(cardName);
    cardObject.className = "card " + cssName;
}
// REQUIRES: allCards is an array of Card objects showing all of player's current cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function changePlayerCardLayout(allCards, cardObjectsArray) {
    // COMMENTS: first need to make it so that all of player's other cards are empty
    for (var i = allCards.length; i < allCards.length + 5 && i < 13; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (var i = 0; i < allCards.length; ++i) {
        updateSingleCardSlot(allCards[i], cardObjectsArray[i]);
    }
}
exports.changePlayerCardLayout = changePlayerCardLayout;
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
function changeTableLayout(bestHandSoFar, cardObjectsArray) {
    var bestCardsSoFar = bestHandSoFar.getCardObjectsInHand;
    // COMMENTS: first need to make it so that all of table's other cards are empty
    for (var i = bestCardsSoFar.length; i < 5; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (var i = 0; i < bestCardsSoFar.length; ++i) {
        updateSingleCardSlot(bestCardsSoFar[i], cardObjectsArray[i]);
    }
}
exports.changeTableLayout = changeTableLayout;
// REQUIRES: cardObjectsArray is an array of HTML elements representing the table's card slots
// EFFECTS: reset the table's card layout
function resetTableLayout(cardObjectsArray) {
    // COMMENTS: make all cards empty
    for (var i = 0; i < 5; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
}
exports.resetTableLayout = resetTableLayout;
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
function activateButtons(cardAmount, cardObjectsArray) {
    // COMMENTS: change the card object based on the updateCard
    for (var i = 0; i < cardAmount; ++i) {
        cardObjectsArray[i].disabled = false;
    }
}
// REQUIRES: current player is done cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: disable the card object buttons
function disableAllButtons(cardObjectsArray) {
    // COMMENTS: change the card object based on the updateCard
    for (var i = 0; i < 13; ++i) {
        cardObjectsArray[i].disabled = true;
    }
}
// EFFECTS: change card display of a cardObject
function highlightSelectedCard(cardObject) {
    if (cardObject.classList.contains("card-highlighted")) {
        cardObject.classList.remove("card-highlighted");
    }
    else {
        cardObject.classList.add("card-highlighted");
    }
}
// REQUIRES: time is up and trackSelection represents all cards selected by players
// EFFECTS: returns an array of numbers showing indices which are desired to be taken out
function convertTrackSelection(trackSelection) {
    var chosenIndices = [];
    for (var i = 0; i < 13; ++i) {
        if (trackSelection[i]) {
            chosenIndices.push(i);
        }
        if (chosenIndices.length >= 5)
            return chosenIndices;
    }
    return chosenIndices;
}
// EFFECTS: basic sleep function
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
// REQUIRES: current player is selecting cards
// REQUIRES: cardAmount is a number showing how many cards player has
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: let player choose cards
function letPlayerChooseCards(cardAmount, cardObjectsArray) {
    // COMMENTS: allow user to choose cards
    activateButtons(cardAmount, cardObjectsArray);
    // COMMENTS: this array is used to see user input
    var trackSelection = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    var _loop_1 = function (i) {
        cardObjectsArray[i].onclick = function () {
            trackSelection[i] = !trackSelection[i];
            highlightSelectedCard(cardObjectsArray[i]);
        };
    };
    // COMMENTS: this is so that the user can select and unselect the cards
    for (var i = 0; i < cardAmount; ++i) {
        _loop_1(i);
    }
    // COMMENTS: do something here
    // COMMENTS: this user should no longer be able to choose the cards 
    disableAllButtons(cardObjectsArray);
    return convertTrackSelection(trackSelection);
}
exports.letPlayerChooseCards = letPlayerChooseCards;
//# sourceMappingURL=ChangeLayout.js.map