"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_OBJECT = void 0;
var Rank_js_1 = require("./Rank.js");
var Suit_js_1 = require("./Suit.js");
var Card_js_1 = require("./Card.js");
/////////////////////////////////
//
//
/* SECTION BELOW: this is the map for the many card objects, analagous to a deck */
//
//
/////////////////////////////////
var CARD_OBJECT = new Map();
exports.CARD_OBJECT = CARD_OBJECT;
CARD_OBJECT.set("THREE_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("THREE_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("THREE_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("THREE_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.THREE, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("FOUR_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("FOUR_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("FOUR_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("FOUR_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FOUR, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("FIVE_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("FIVE_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("FIVE_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("FIVE_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.FIVE, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("SIX_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("SIX_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("SIX_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("SIX_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SIX, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("SEVEN_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("SEVEN_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("SEVEN_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("SEVEN_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.SEVEN, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("EIGHT_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("EIGHT_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("EIGHT_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("EIGHT_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.EIGHT, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("NINE_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("NINE_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("NINE_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("NINE_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.NINE, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("TEN_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("TEN_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("TEN_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("TEN_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TEN, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("JACK_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("JACK_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("JACK_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("JACK_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.JACK, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("QUEENE_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("QUEEN_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("QUEEN_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("QUEEN_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.QUEEN, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("KING_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("KING_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("KING_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("KING_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.KING, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("ACEOF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("ACE_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("ACE_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("ACE_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.ACE, Suit_js_1.SUIT_OBJECT.SPADES));
CARD_OBJECT.set("TWO_OF_DIAMONDS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.DIAMONDS));
CARD_OBJECT.set("TWO_OF_CLUBS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.CLUBS));
CARD_OBJECT.set("TWO_OF_HEARTS", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.HEARTS));
CARD_OBJECT.set("TWO_OF_SPADES", new Card_js_1.Card(Rank_js_1.RANK_OBJECT.TWO, Suit_js_1.SUIT_OBJECT.SPADES));
//# sourceMappingURL=AllCards.js.map