/////////////////////////////////
//
//
/* SECTION BELOW: these are all the elements used by the document */
//
//
/////////////////////////////////

// COMMENTS: submit button HTML element

var submit_button: HTMLElement = document.getElementById("submit-answer")!;


// COMMENTS: these are HTML elements showing the main table card slots
var mc0: HTMLElement = document.getElementById("main-card-0")!;
var mc1: HTMLElement = document.getElementById("main-card-1")!;
var mc2: HTMLElement = document.getElementById("main-card-2")!;
var mc3: HTMLElement = document.getElementById("main-card-3")!;
var mc4: HTMLElement = document.getElementById("main-card-4")!;

// COMMENTS: these are HTML elements showing the card slots of player 0
var p0c0: HTMLElement = document.getElementById("player-0-card-0")!;
var p0c1: HTMLElement = document.getElementById("player-0-card-1")!;
var p0c2: HTMLElement = document.getElementById("player-0-card-2")!;
var p0c3: HTMLElement = document.getElementById("player-0-card-3")!;
var p0c4: HTMLElement = document.getElementById("player-0-card-4")!;
var p0c5: HTMLElement = document.getElementById("player-0-card-5")!;
var p0c6: HTMLElement = document.getElementById("player-0-card-6")!;
var p0c7: HTMLElement = document.getElementById("player-0-card-7")!;
var p0c8: HTMLElement = document.getElementById("player-0-card-8")!;
var p0c9: HTMLElement = document.getElementById("player-0-card-9")!;
var p0c10: HTMLElement = document.getElementById("player-0-card-10")!;
var p0c11: HTMLElement = document.getElementById("player-0-card-11")!;
var p0c12: HTMLElement = document.getElementById("player-0-card-12")!;

// COMMENTS: these are HTML elements showing the card slots of player 1
var p1c0: HTMLElement = document.getElementById("player-1-card-0")!;
var p1c1: HTMLElement = document.getElementById("player-1-card-1")!;
var p1c2: HTMLElement = document.getElementById("player-1-card-2")!;
var p1c3: HTMLElement = document.getElementById("player-1-card-3")!;
var p1c4: HTMLElement = document.getElementById("player-1-card-4")!;
var p1c5: HTMLElement = document.getElementById("player-1-card-5")!;
var p1c6: HTMLElement = document.getElementById("player-1-card-6")!;
var p1c7: HTMLElement = document.getElementById("player-1-card-7")!;
var p1c8: HTMLElement = document.getElementById("player-1-card-8")!;
var p1c9: HTMLElement = document.getElementById("player-1-card-9")!;
var p1c10: HTMLElement = document.getElementById("player-1-card-10")!;
var p1c11: HTMLElement = document.getElementById("player-1-card-11")!;
var p1c12: HTMLElement = document.getElementById("player-1-card-12")!;

// COMMENTS: these are HTML elements showing the card slots of player 2
var p2c0: HTMLElement = document.getElementById("player-2-card-0")!;
var p2c1: HTMLElement = document.getElementById("player-2-card-1")!;
var p2c2: HTMLElement = document.getElementById("player-2-card-2")!;
var p2c3: HTMLElement = document.getElementById("player-2-card-3")!;
var p2c4: HTMLElement = document.getElementById("player-2-card-4")!;
var p2c5: HTMLElement = document.getElementById("player-2-card-5")!;
var p2c6: HTMLElement = document.getElementById("player-2-card-6")!;
var p2c7: HTMLElement = document.getElementById("player-2-card-7")!;
var p2c8: HTMLElement = document.getElementById("player-2-card-8")!;
var p2c9: HTMLElement = document.getElementById("player-2-card-9")!;
var p2c10: HTMLElement = document.getElementById("player-2-card-10")!;
var p2c11: HTMLElement = document.getElementById("player-2-card-11")!;
var p2c12: HTMLElement = document.getElementById("player-2-card-12")!;

// COMMENTS: these are HTML elements showing the card slots of player 3
var p3c0: HTMLElement = document.getElementById("player-3-card-0")!;
var p3c1: HTMLElement = document.getElementById("player-3-card-1")!;
var p3c2: HTMLElement = document.getElementById("player-3-card-2")!;
var p3c3: HTMLElement = document.getElementById("player-3-card-3")!;
var p3c4: HTMLElement = document.getElementById("player-3-card-4")!;
var p3c5: HTMLElement = document.getElementById("player-3-card-5")!;
var p3c6: HTMLElement = document.getElementById("player-3-card-6")!;
var p3c7: HTMLElement = document.getElementById("player-3-card-7")!;
var p3c8: HTMLElement = document.getElementById("player-3-card-8")!;
var p3c9: HTMLElement = document.getElementById("player-3-card-9")!;
var p3c10: HTMLElement = document.getElementById("player-3-card-10")!;
var p3c11: HTMLElement = document.getElementById("player-3-card-11")!;
var p3c12: HTMLElement = document.getElementById("player-3-card-12")!;

// COMMENTS: these are HTML elements in an array showing the main table card slots
var mainCardsHTML: Array<HTMLElement> = [
    mc0,
    mc1,
    mc2,
    mc3,
    mc4
];

// COMMENTS: these are HTML elements in an array showing the card slots of player 0
var player0CardsHTML: Array<HTMLElement> = [
    p0c0,
    p0c1,
    p0c2,
    p0c3,
    p0c4,
    p0c5,
    p0c6,
    p0c7,
    p0c8,
    p0c9,
    p0c10,
    p0c11,
    p0c12
];

// COMMENTS: these are HTML elements in an array showing the card slots of player 1
var player1CardsHTML: Array<HTMLElement> = [
    p1c0,
    p1c1,
    p1c2,
    p1c3,
    p1c4,
    p1c5,
    p1c6,
    p1c7,
    p1c8,
    p1c9,
    p1c10,
    p1c11,
    p1c12
];

// COMMENTS: these are HTML elements in an array showing the card slots of player 2
var player2CardsHTML: Array<HTMLElement> = [
    p2c0,
    p2c1,
    p2c2,
    p2c3,
    p2c4,
    p2c5,
    p2c6,
    p2c7,
    p2c8,
    p2c9,
    p2c10,
    p2c11,
    p2c12
];

// COMMENTS: these are HTML elements in an array showing the card slots of player 3
var player3CardsHTML: Array<HTMLElement> = [
    p3c0,
    p3c1,
    p3c2,
    p3c3,
    p3c4,
    p3c5,
    p3c6,
    p3c7,
    p3c8,
    p3c9,
    p3c10,
    p3c11,
    p3c12
];

/////////////////////////////////
//
//
/* SECTION BELOW: this disableEverySingleButton function is run before the game begins*/
//
//
/////////////////////////////////

// EFFECTS: disable all buttons function
// NOTES: used at the beginning of the game for the most part
function disableEverySingleButton(): void {
    for (let p0Card of player0CardsHTML) {
        (<HTMLInputElement>p0Card).disabled = true;
    }
    for (let p1Card of player1CardsHTML) {
        (<HTMLInputElement>p1Card).disabled = true;
    }
    for (let p2Card of player2CardsHTML) {
        (<HTMLInputElement>p2Card).disabled = true;
    }
    for (let p3Card of player3CardsHTML) {
        (<HTMLInputElement>p3Card).disabled = true;
    }
}

/////////////////////////////////
//
//
/* SECTION BELOW: this is the map that is used in ./ChangeLayout.js */
//
//
/////////////////////////////////

// COMMENTS: this map matches card names to its corresponding CSS class string
let mapCardNameToCSS = new Map<string, string>();

mapCardNameToCSS.set("Three of Diamonds", "card-3D");
mapCardNameToCSS.set("Three of Clubs", "card-3C");
mapCardNameToCSS.set("Three of Hearts", "card-3H");
mapCardNameToCSS.set("Three of Spades", "card-3S");

mapCardNameToCSS.set("Four of Diamonds", "card-4D");
mapCardNameToCSS.set("Four of Clubs", "card-4C");
mapCardNameToCSS.set("Four of Hearts", "card-4H");
mapCardNameToCSS.set("Four of Spades", "card-4S");

mapCardNameToCSS.set("Five of Diamonds", "card-5D");
mapCardNameToCSS.set("Five of Clubs", "card-5C");
mapCardNameToCSS.set("Five of Hearts", "card-5H");
mapCardNameToCSS.set("Five of Spades", "card-5S");

mapCardNameToCSS.set("Six of Diamonds", "card-6D");
mapCardNameToCSS.set("Six of Clubs", "card-6C");
mapCardNameToCSS.set("Six of Hearts", "card-6H");
mapCardNameToCSS.set("Six of Spades", "card-6S");

mapCardNameToCSS.set("Seven of Diamonds", "card-7D");
mapCardNameToCSS.set("Seven of Clubs", "card-7C");
mapCardNameToCSS.set("Seven of Hearts", "card-7H");
mapCardNameToCSS.set("Seven of Spades", "card-7S");

mapCardNameToCSS.set("Eight of Diamonds", "card-8D");
mapCardNameToCSS.set("Eight of Clubs", "card-8C");
mapCardNameToCSS.set("Eight of Hearts", "card-8H");
mapCardNameToCSS.set("Eight of Spades", "card-8S");

mapCardNameToCSS.set("Nine of Diamonds", "card-9D");
mapCardNameToCSS.set("Nine of Clubs", "card-9C");
mapCardNameToCSS.set("Nine of Hearts", "card-9H");
mapCardNameToCSS.set("Nine of Spades", "card-9S");

mapCardNameToCSS.set("Ten of Diamonds", "card-10D");
mapCardNameToCSS.set("Ten of Clubs", "card-10C");
mapCardNameToCSS.set("Ten of Hearts", "card-10H");
mapCardNameToCSS.set("Ten of Spades", "card-10S");

mapCardNameToCSS.set("Jack of Diamonds", "card-JD");
mapCardNameToCSS.set("Jack of Clubs", "card-JC");
mapCardNameToCSS.set("Jack of Hearts", "card-JH");
mapCardNameToCSS.set("Jack of Spades", "card-JS");

mapCardNameToCSS.set("Queen of Diamonds", "card-QD");
mapCardNameToCSS.set("Queen of Clubs", "card-QC");
mapCardNameToCSS.set("Queen of Hearts", "card-QH");
mapCardNameToCSS.set("Queen of Spades", "card-QS");

mapCardNameToCSS.set("King of Diamonds", "card-KD");
mapCardNameToCSS.set("King of Clubs", "card-KC");
mapCardNameToCSS.set("King of Hearts", "card-KH");
mapCardNameToCSS.set("King of Spades", "card-KS");

mapCardNameToCSS.set("Ace of Diamonds", "card-AD");
mapCardNameToCSS.set("Ace of Clubs", "card-AC");
mapCardNameToCSS.set("Ace of Hearts", "card-AH");
mapCardNameToCSS.set("Ace of Spades", "card-AS");

mapCardNameToCSS.set("Two of Diamonds", "card-2D");
mapCardNameToCSS.set("Two of Clubs", "card-2C");
mapCardNameToCSS.set("Two of Hearts", "card-2H");
mapCardNameToCSS.set("Two of Spades", "card-2S");

export {
    submit_button, mapCardNameToCSS, disableEverySingleButton, mainCardsHTML,
    player0CardsHTML, player1CardsHTML, player2CardsHTML, player3CardsHTML
}