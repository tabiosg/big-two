import { Card } from './Card.js';
import { RANK_OBJECT } from './Rank.js';
import { SUIT_OBJECT } from './Suit.js';

function ThreeD(): Card {
    return new Card(RANK_OBJECT.THREE, SUIT_OBJECT.DIAMONDS);
}

function ThreeC(): Card {
    return new Card(RANK_OBJECT.THREE, SUIT_OBJECT.CLUBS);
}

function ThreeH(): Card {
    return new Card(RANK_OBJECT.THREE, SUIT_OBJECT.HEARTS);
}

function ThreeS(): Card {
    return new Card(RANK_OBJECT.THREE, SUIT_OBJECT.SPADES);
}

function FourD(): Card {
    return new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.DIAMONDS);
}

function FourC(): Card {
    return new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.CLUBS);
}

function FourH(): Card {
    return new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.HEARTS);
}

function FourS(): Card {
    return new Card(RANK_OBJECT.FOUR, SUIT_OBJECT.SPADES);
}

function FiveD(): Card {
    return new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.DIAMONDS);
}

function FiveC(): Card {
    return new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.CLUBS);
}

function FiveH(): Card {
    return new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.HEARTS);
}

function FiveS(): Card {
    return new Card(RANK_OBJECT.FIVE, SUIT_OBJECT.SPADES);
}

function SixD(): Card {
    return new Card(RANK_OBJECT.SIX, SUIT_OBJECT.DIAMONDS);
}

function SixC(): Card {
    return new Card(RANK_OBJECT.SIX, SUIT_OBJECT.CLUBS);
}

function SixH(): Card {
    return new Card(RANK_OBJECT.SIX, SUIT_OBJECT.HEARTS);
}

function SixS(): Card {
    return new Card(RANK_OBJECT.SIX, SUIT_OBJECT.SPADES);
}

function SevenD(): Card {
    return new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.DIAMONDS);
}

function SevenC(): Card {
    return new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.CLUBS);
}

function SevenH(): Card {
    return new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.HEARTS);
}

function SevenS(): Card {
    return new Card(RANK_OBJECT.SEVEN, SUIT_OBJECT.SPADES);
}

function EightD(): Card {
    return new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.DIAMONDS);
}

function EightC(): Card {
    return new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.CLUBS);
}

function EightH(): Card {
    return new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.HEARTS);
}

function EightS(): Card {
    return new Card(RANK_OBJECT.EIGHT, SUIT_OBJECT.SPADES);
}

function NineD(): Card {
    return new Card(RANK_OBJECT.NINE, SUIT_OBJECT.DIAMONDS);
}

function NineC(): Card {
    return new Card(RANK_OBJECT.NINE, SUIT_OBJECT.CLUBS);
}

function NineH(): Card {
    return new Card(RANK_OBJECT.NINE, SUIT_OBJECT.HEARTS);
}

function NineS(): Card {
    return new Card(RANK_OBJECT.NINE, SUIT_OBJECT.SPADES);
}

function TenD(): Card {
    return new Card(RANK_OBJECT.TEN, SUIT_OBJECT.DIAMONDS);
}

function TenC(): Card {
    return new Card(RANK_OBJECT.TEN, SUIT_OBJECT.CLUBS);
}

function TenH(): Card {
    return new Card(RANK_OBJECT.TEN, SUIT_OBJECT.HEARTS);
}

function TenS(): Card {
    return new Card(RANK_OBJECT.TEN, SUIT_OBJECT.SPADES);
}

function JackD(): Card {
    return new Card(RANK_OBJECT.JACK, SUIT_OBJECT.DIAMONDS);
}

function JackC(): Card {
    return new Card(RANK_OBJECT.JACK, SUIT_OBJECT.CLUBS);
}

function JackH(): Card {
    return new Card(RANK_OBJECT.JACK, SUIT_OBJECT.HEARTS);
}

function JackS(): Card {
    return new Card(RANK_OBJECT.JACK, SUIT_OBJECT.SPADES);
}

function QueenD(): Card {
    return new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.DIAMONDS);
}

function QueenC(): Card {
    return new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.CLUBS);
}

function QueenH(): Card {
    return new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.HEARTS);
}

function QueenS(): Card {
    return new Card(RANK_OBJECT.QUEEN, SUIT_OBJECT.SPADES);
}

function KingD(): Card {
    return new Card(RANK_OBJECT.KING, SUIT_OBJECT.DIAMONDS);
}

function KingC(): Card {
    return new Card(RANK_OBJECT.KING, SUIT_OBJECT.CLUBS);
}

function KingH(): Card {
    return new Card(RANK_OBJECT.KING, SUIT_OBJECT.HEARTS);
}

function KingS(): Card {
    return new Card(RANK_OBJECT.KING, SUIT_OBJECT.SPADES);
}

function AceD(): Card {
    return new Card(RANK_OBJECT.ACE, SUIT_OBJECT.DIAMONDS);
}

function AceC(): Card {
    return new Card(RANK_OBJECT.ACE, SUIT_OBJECT.CLUBS);
}

function AceH(): Card {
    return new Card(RANK_OBJECT.ACE, SUIT_OBJECT.HEARTS);
}

function AceS(): Card {
    return new Card(RANK_OBJECT.ACE, SUIT_OBJECT.SPADES);
}

function TwoD(): Card {
    return new Card(RANK_OBJECT.TWO, SUIT_OBJECT.DIAMONDS);
}

function TwoC(): Card {
    return new Card(RANK_OBJECT.TWO, SUIT_OBJECT.CLUBS);
}

function TwoH(): Card {
    return new Card(RANK_OBJECT.TWO, SUIT_OBJECT.HEARTS);
}

function TwoS(): Card {
    return new Card(RANK_OBJECT.TWO, SUIT_OBJECT.SPADES);
}

export {
    ThreeD, ThreeC, ThreeH, ThreeS, 
    FourD, FourC, FourH, FourS, 
    FiveD, FiveC, FiveH, FiveS, 
    SixD, SixC, SixH, SixS, 
    SevenD, SevenC, SevenH, SevenS, 
    EightD, EightC, EightH, EightS, 
    NineD, NineC, NineH, NineS, 
    TenD, TenC, TenH, TenS, 
    JackD, JackC, JackH, JackS,
    QueenD, QueenC, QueenH, QueenS, 
    KingD, KingC, KingH, KingS, 
    AceD, AceC, AceH, AceS, 
    TwoD, TwoC, TwoH, TwoS
}