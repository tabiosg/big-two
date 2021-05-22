// USAGE: used in ordered ranks
enum RANK_STRING {
    THREE = "Three",
    FOUR = "Four",
    FIVE = "Five",
    SIX = "Six",
    SEVEN = "Seven",
    EIGHT = "Eight",
    NINE = "Nine",
    TEN = "Ten",
    JACK = "Jack",
    QUEEN = "Queen",
    KING = "King",
    ACE = "Ace",
    TWO = "Two"
}

// USAGE: used as a map to get a rank's strength
let RANK_STRENGTHS = new Map<string, number>();

RANK_STRENGTHS.set("3", 0);
RANK_STRENGTHS.set("4", 1);
RANK_STRENGTHS.set("5", 2);
RANK_STRENGTHS.set("6", 3);
RANK_STRENGTHS.set("7", 4);
RANK_STRENGTHS.set("8", 5);
RANK_STRENGTHS.set("9", 6);
RANK_STRENGTHS.set("10", 7);
RANK_STRENGTHS.set("J", 8);
RANK_STRENGTHS.set("Q", 9);
RANK_STRENGTHS.set("K", 10);
RANK_STRENGTHS.set("A", 11);
RANK_STRENGTHS.set("2", 12);

class Rank {
    // COMMENTS: these are the member variables of Rank
    private name: string;

    // REQUIRES: stringRank is a string
    // EXAMPLES: stringRank1 = "Ace", stringRank2 = "Eight"
    constructor(stringRank: string) {
        this.name = stringRank;
    }

    //EFFECTS: returns a string of this rank
    get getRankName(): string {
        return this.name;
    }

    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has same rank as otherCard, false otherwise
    isSameRankAs(otherRank: Rank): boolean {
        return this.name == otherRank.name;
    }

    //REQUIRES: otherRank is a Rank object
    //EFFECTS: returns true if this object has better rank than otherCard, false otherwise
    isBetterRankThan(otherRank: Rank): boolean {
        // COMMENTS: these strength variables represent the importance of ranks
        const firstRankStrength: number = RANK_STRENGTHS.get(this.name)!;
        const secondRankStrength: number = RANK_STRENGTHS.get(otherRank.name)!;

        return firstRankStrength > secondRankStrength;
    }

    //REQUIRES: otherRank is a Rank object
    //EFFECTS: if this < otherRank, return -1. if this > other_suit, return 1. return 0 otherwise
    compareToTheRank(otherRank: Rank): number {
        return compareTwoRanks(this, otherRank);
    }
}

//REQUIRES: firstRank and secondRank are Rank objects
//EFFECTS: if firstRank < secondRank, return -1. if firstRank > secondRank, return 1. return 0 otherwise
//USAGE: ranksVector.sort(compareTwoRanks);
function compareTwoRanks(firstRank: Rank, secondRank: Rank): number {
    // COMMENTS: these strength variables represent the importance of rank
    const firstRankStrength: number = RANK_STRENGTHS.get(firstRank.getRankName)!;
    const secondRankStrength: number = RANK_STRENGTHS.get(secondRank.getRankName)!;

    // COMMENTS: go compare
    if (firstRankStrength < secondRankStrength) return -1;
    else if (firstRankStrength == secondRankStrength) {
        return 0;
    }
    return 1;
}

// USAGE: used in getting rank objects
var RANK_OBJECT = {
    THREE: new Rank(RANK_STRING.THREE),
    FOUR: new Rank(RANK_STRING.FOUR),
    FIVE: new Rank(RANK_STRING.FIVE),
    SIX: new Rank(RANK_STRING.SIX),
    SEVEN: new Rank(RANK_STRING.SEVEN),
    EIGHT: new Rank(RANK_STRING.EIGHT),
    NINE: new Rank(RANK_STRING.NINE),
    TEN: new Rank(RANK_STRING.TEN),
    JACK: new Rank(RANK_STRING.JACK),
    QUEEN: new Rank(RANK_STRING.QUEEN),
    KING: new Rank(RANK_STRING.KING),
    ACE: new Rank(RANK_STRING.ACE),
    TWO: new Rank(RANK_STRING.TWO)
}

export { compareTwoRanks, RANK_OBJECT, RANK_STRING, RANK_STRENGTHS, Rank }
