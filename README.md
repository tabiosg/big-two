# Big Two

Big Two is a playing card game popular in Asia.
It's called Big 2 because 2 is the highest rank in the game.
The goal of the game is to play all of one's cards before the other players.

## This Project

This project allows one to play Big Two on a website. The website is not live.

## Instructions

Four players are dealt thirteen cards each (joker cards are not included in the deck). 
Cards are dealt counterclockwise and the game also proceeds counterclockwise.

NOTE: *"hand" is defined as the set of cards played by a player.*

There are several rules for players to follow:

1. The lowest card is the 3♦, and the highest card is 2♠\
   Ex: 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2\
       3♦, 3♣, 3♥, 3♠, 4♦, ... , A♠, 2♦, 2♣, 2♥, 2♠
2. The player with the 3♦ plays first. They must play the 3♦ in a single, double,
   triple, or combo.
3. Singles, doubles, triples:
   *Doubles and triples DO NOT have to be consecutive cards*
    1. Singles: One card. Can only be played if:
       * The table is empty.
       * The last played hand was a single. In this case, the next single played
         must be higher than the previous single played.\
         Ex: 10♣ is on the table. You can play 10♥ , J♦, etc.
    2. Doubles: Two cards with the same rank. Can only be played if:
       * The table is empty.
       * The last played hand was a double. In this case, the next double played
         must be higher than the previous double played.
         If you have a double of the same rank as the previously played double, you
         can play it if it is greater than or equal to the previous double.\
         Ex: ♦ + ♣ < ♥ + ♠\
             ♦ + ♥ < ♣ + ♠\
             ♦ + ♠ = ♣ + ♥\
             10♣ + 10♥ is on the table. You can play 10♦ + 10♠, or Q♦ + Q♣, etc.
    3. Triples: Three cards with the same rank. Can only be played if:
       * The table is empty.
       * The last played hand was a triple. In this case, the next triple played
         must be higher than the previous triple played.\
         Ex: 5♦ + 5♥ + 5♠ is beaten by 9♣ + 9♦ + 9♥
4. There is a combo hierarchy:
   **Straight < Flush < House < Bomb < Straight Flush**
    1. Straight: 5 consecutive cards by rank. Suit does not matter.\
       When comparing straights, the one with the highest card wins.\
       Cannot loop higher and lower cards.\
       DO: 4♥ 5♦ 6♥ 7♠ 8♠\
       DO NOT: A♠ 2♥ 3♥ 4♥ 5♦ (loops from 2 back to 3)
    2. Flush: 5 cards with the same suit. Rank does not matter.\
       If the previous hand was a flush, the next flush must be greater in terms\
       of suit. If two flushes have the same suit, the one with the highest rank\
       beats the other.\
       Ex: 3♠ 6♠ 8♠ J♠ A♠ < 5♠ 7♠ 9♠ 10♠ 2♠ because A♠ < 2♠
    3. House: 5 cards consisting of one double and one triple.\
       The triples are used for comparisons with other houses.\
       Ex: 3♣ 3♦ 10♠ 10♥ 10♦ > 2♠ 2♦ 9♠ 9♥ 9♦ (10 > 9)
    4. Bomb: 4 cards of the same rank and one waste card (any card).\
       Ex: 8♦ 8♣ 8♥ 8♠ J♥, where J♥ is the waste card
    5. Straight Flush: 5 consecutive cards with the same suit.
       When comparing straight flushes, the one with the highest card wins.\
       A straight flush with J, Q, K, A, and 2 is called a "royal flush".\
       Ex: 5♦ 6♦ 7♦ 8♦ 9♦ (regular straight flush)\
       Ex: J♣ Q♣ K♣ A♣ 2♣ (a royal flush)
5. Players must play cards higher than the last played hand on the table. If a player does not\
   have a hand higher than the hand on the table, or if they do not want to play a hand this turn,\
   they can pass.\
   \
   If all players pass, the table is reset and last person who put down a hand gets to go again.\
   They can play any card they want.

## Work

Most of the work done for this project can be found in the src/js file and in index.php.
