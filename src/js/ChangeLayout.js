"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableAllButtons = exports.letPlayerChooseCards = exports.hidePlayerCardLayout = exports.revealPlayerCardLayout = exports.resetTableLayout = exports.changeTableLayout = void 0;
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
function revealSingleCardSlot(updatedCard, cardObject) {
    // COMMENTS: change the card object based on the updateCard
    var cardName = updatedCard.getName;
    var cssName = Reference_js_1.mapCardNameToCSS.get(cardName);
    cardObject.className = "card " + cssName;
}
// REQUIRES: allCards is an array of Card objects showing all of player's current cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function revealPlayerCardLayout(allCards, cardObjectsArray) {
    // COMMENTS: first need to make it so that all of player's other cards are empty
    for (var i = allCards.length; i < allCards.length + 5 && i < 13; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (var i = 0; i < allCards.length; ++i) {
        revealSingleCardSlot(allCards[i], cardObjectsArray[i]);
    }
}
exports.revealPlayerCardLayout = revealPlayerCardLayout;
// REQUIRES: cardObject is a HTML element representing the card slot to be updated
// EFFECTS: hide card slot
function hideSingleCardSlot(cardObject) {
    cardObject.className = "card " + "card-back";
}
// REQUIRES: allCards is an array of Card objects showing all of player's current cards
// REQUIRES: cardObjectsArray is an array of HTML elements representing the player's card slots
// EFFECTS: change and update a player's card layout (the player being whoever owns the array of cards)
function hidePlayerCardLayout(allCards, cardObjectsArray) {
    // COMMENTS: first need to make it so that all of player's other cards are empty
    for (var i = allCards.length; i < allCards.length + 5 && i < 13; ++i) {
        makeCardSlotEmpty(cardObjectsArray[i]);
    }
    // COMMENTS: now change each of the cards and update them
    for (var i = 0; i < allCards.length; ++i) {
        hideSingleCardSlot(cardObjectsArray[i]);
    }
}
exports.hidePlayerCardLayout = hidePlayerCardLayout;
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
function changeTableLayout(bestHandSoFar) {
    var bestCardsSoFar = bestHandSoFar.getCardObjectsInHand;
    // COMMENTS: now change each of the cards and update them
    for (var i = 0; i < bestCardsSoFar.length; ++i) {
        revealSingleCardSlot(bestCardsSoFar[i], Reference_js_1.mainCardsHTML[i]);
    }
}
exports.changeTableLayout = changeTableLayout;
// REQUIRES: cardObjectsArray is an array of HTML elements representing the table's card slots
// EFFECTS: reset the table's card layout
function resetTableLayout() {
    // COMMENTS: make all cards empty
    for (var i = 0; i < 5; ++i) {
        makeCardSlotEmpty(Reference_js_1.mainCardsHTML[i]);
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
        var specificCardObject = cardObjectsArray[i];
        specificCardObject.disabled = true;
        if (specificCardObject.classList.contains("card-highlighted")) {
            specificCardObject.classList.remove("card-highlighted");
        }
    }
}
exports.disableAllButtons = disableAllButtons;
// EFFECTS: change card display of a cardObject
function highlightSelectedCard(cardObject) {
    if (cardObject.classList.contains("card-highlighted")) {
        cardObject.classList.remove("card-highlighted");
    }
    else {
        cardObject.classList.add("card-highlighted");
    }
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
function letPlayerChooseCards(cardAmount, cardObjectsArray, trackSelection) {
    // COMMENTS: allow user to choose cards
    activateButtons(cardAmount, cardObjectsArray);
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
}
exports.letPlayerChooseCards = letPlayerChooseCards;
//# sourceMappingURL=ChangeLayout.js.map