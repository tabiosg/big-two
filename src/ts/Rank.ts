class Rank {
    // COMMENTS: these are the member variables of Rank
    private name: string;
    static rankStrings: Array<string> = [
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King",
        "Ace",
        "Two",
    ];
    static rankStrengths: Map<string, number> = new Map([
        ["Three", 0],
        ["Four", 1],
        ["Five", 2],
        ["Six", 3],
        ["Seven", 4],
        ["Eight", 5],
        ["Nine", 6],
        ["Ten", 7],
        ["Jack", 8],
        ["Queen", 9],
        ["King", 10],
        ["Ace", 11],
        ["Two", 12],
    ]);

    // REQUIRES: stringRank is a string
    // EXAMPLES: stringRank1 = "Ace", stringRank2 = "Eight"
    constructor(stringRank: string) {
        this.name = stringRank;
    }

    //EFFECTS: returns a string of this rank
    getRankName(): string {
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
        const firstRankStrength: number = Rank.rankStrengths.get(this.name)!;
        const secondRankStrength: number = Rank.rankStrengths.get(otherRank.name)!;

        return firstRankStrength > secondRankStrength;
    }

    //REQUIRES: otherRank is a Rank object
    //EFFECTS: if this < otherRank, return -1. if this > other_suit, return 1. return 0 otherwise
    compareToTheRank(otherRank: Rank): number {
        return Rank.compareTwoRanks(this, otherRank);
    }

    //REQUIRES: firstRank and secondRank are Rank objects
    //EFFECTS: if firstRank < secondRank, return -1. if firstRank > secondRank, return 1. return 0 otherwise
    //USAGE: ranksVector.sort(Rank.compareTwoRanks);
    static compareTwoRanks(firstRank: Rank, secondRank: Rank): number {
        // COMMENTS: these strength variables represent the importance of rank
        const firstRankStrength: number = Rank.rankStrengths.get(firstRank.getRankName());
        const secondRankStrength: number = Rank.rankStrengths.get(secondRank.getRankName());

        // COMMENTS: go compare
        if (firstRankStrength < secondRankStrength) return -1;
        else if (firstRankStrength == secondRankStrength) {
            return 0;
        }
        return 1;
        
    }
}

export { Rank }
