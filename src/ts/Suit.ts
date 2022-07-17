class Suit {
    // COMMENTS: these are the member variables of Suit
    private name: string;
    static suitStrings: Array<string> = [
        "Diamonds",
        "Clubs",
        "Hearts",
        "Spades",
    ];
    static suitStrengths: Map<string, number> = new Map([
        ["Diamonds", 0],
        ["Clubs", 1],
        ["Hearts", 2],
        ["Spades", 3],
    ]);

    // REQUIRES: stringSuit is a string
    // EXAMPLES: stringSuit = "Spades", stringRank2 = SUIT.SPADES
    constructor(stringSuit: string) {
        this.name = stringSuit;
    }

    // EFFECTS: returns a string of this suit
    getSuitName(): string {
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
        const first_suit_strength = Suit.suitStrengths.get(this.name)!;
        const second_suit_strength = Suit.suitStrengths.get(otherSuit.name)!;

        return first_suit_strength > second_suit_strength;
    }

    // REQUIRES: otherSuit is a Suit object
    // EFFECTS: if this < other_suit, return -1. if this > other_suit, return 1. return 0 otherwise
    compareToTheSuit(otherSuit: Suit): number {
        return Suit.compareTwoSuits(this, otherSuit);
    }

    // REQUIRES: firstSuit and secondSuit are Suit objects
    // EFFECTS: if firstSuit < secondSuit, return -1. if firstSuit > secondSuit, return 1. return 0 otherwise
    // USAGE: suitsVector.sort(Suit.compareTwoSuits);
    static compareTwoSuits(firstSuit: Suit, secondSuit: Suit): number {
        // COMMENTS: these strength variables represent the importance of suits
        const firstSuitStrength = Suit.suitStrengths.get(firstSuit.getSuitName())!;
        const secondSuitStrength = Suit.suitStrengths.get(secondSuit.getSuitName())!;

        // COMMENTS: go compare
        if (firstSuitStrength < secondSuitStrength) return -1;
        else if (firstSuitStrength == secondSuitStrength) {
            return 0;
        }
        return 1;
    }
}

export {Suit}