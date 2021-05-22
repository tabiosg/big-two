// USAGE: used in ordered ranks
// NOTES: 2662, 2667, 2661, 2664 for black and white, 2666, 2663, 2665, 2660 for color
enum SUIT_STRING {
    DIAMONDS = "Diamonds",
    CLUBS = "Clubs",
    HEARTS = "Hearts",
    SPADES = "Spades",
}

// USAGE: used as a map to get a suit's strength
let SUIT_STRENGTHS = new Map<string, number>();

SUIT_STRENGTHS.set("Diamonds", 0);
SUIT_STRENGTHS.set("Clubs", 1);
SUIT_STRENGTHS.set("Hearts", 2);
SUIT_STRENGTHS.set("Spades", 3);

class Suit {
    // COMMENTS: these are the member variables of Suit
    private name: string;

    // REQUIRES: stringSuit is a string
    // EXAMPLES: stringSuit = "Spades", stringRank2 = SUIT.SPADES
    constructor(stringSuit: string) {
        this.name = stringSuit;
    }

    // EFFECTS: returns a string of this suit
    get getSuitName(): string {
        return this.name;
    }

    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: returns true if this object has same suit as otherCard, false otherwise
    isSameSuitAs(otherSuit: Suit): boolean {
        return this.name == otherSuit.name;
    }

    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: returns true if this object has better suit than otherCard, false otherwise
    isBetterSuitThan(otherSuit: Suit): boolean {
        // COMMENTS: these strength variables represent the importance of suits
        const first_suit_strength = SUIT_STRENGTHS.get(this.name)!;
        const second_suit_strength = SUIT_STRENGTHS.get(otherSuit.name)!;

        return first_suit_strength > second_suit_strength;
    }

    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: if this < other_suit, return -1. if this > other_suit, return 1. return 0 otherwise
    compareToTheSuit(otherSuit: Suit): number {
        return compareTwoSuits(this, otherSuit);
    }
}

// REQUIRES: firstSuit and secondSuit are Suit objects
// EFFECTS: if firstSuit < secondSuit, return -1. if firstSuit > secondSuit, return 1. return 0 otherwise
// USAGE: suitsVector.sort(compareTwoSuits);
function compareTwoSuits(firstSuit: Suit, secondSuit: Suit): number {
    // COMMENTS: these strength variables represent the importance of suits
    const firstSuitStrength = SUIT_STRENGTHS.get(firstSuit.getSuitName)!;
    const secondSuitStrength = SUIT_STRENGTHS.get(secondSuit.getSuitName)!;

    // COMMENTS: go compare
    if (firstSuitStrength < secondSuitStrength) return -1;
    else if (firstSuitStrength == secondSuitStrength) {
        return 0;
    }
    return 1;
}

// USAGE: used in getting suit objects
var SUIT_OBJECT = {
    DIAMONDS: new Suit(SUIT_STRING.DIAMONDS),
    CLUBS: new Suit(SUIT_STRING.DIAMONDS),
    HEARTS: new Suit(SUIT_STRING.HEARTS),
    SPADES: new Suit(SUIT_STRING.SPADES)
}

export {compareTwoSuits, SUIT_OBJECT, SUIT_STRING, Suit}