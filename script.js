/* The completed project should, when executed, do the following:

    Deal 26 Cards to each Player from a Deck of 52 cards.
    Iterate through the turns where each Player plays a Card.
    The Player who played the higher card is awarded a point.
    -Ties result in zero points for both Players.
    After all cards have been played, display the score and declare the winner. */


/*     Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. */

/* Steps I should take for the card game */

// Deck
// How many Cards in this Deck '52 Cards 
// What types are differences are thier in the 52 cards 
// Suit Heart,Spade,Club,Diamond 
// values for all cards 
// need to shuffle as well when for the start of the game
// A way to deal cards out to the players 
// Players and count 
// Score tracking
// what cards are in your hand 
// Turn based
// Card comparsion 



//Deck Class 

    // Array to store cards 
    // Rank of cards array as well
    // Array for card suit's 
    
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
        ];
        this.suits = [
            "Hearts", "Diamonds", "Spades", "Clubs"
        ]
    }
    // Need to create the deck 
        // push a new card into the array's to add values to them  
    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
              let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}` ,
                value: j + 1 
              }

              this.deck.push(card)
            }
        }
    }

// Need a way to shuffle the card deck now 
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

}


//Card Game code
        //will need logic to play 
        // 2 players, Score, name and hand 
        // turn based game 

    class Game {
        constructor() {
            this.player1 = {
                name: 'Player 1',
                score: 0,
                hand: []
            }
            this.player2 = {
                name: 'Player 1',
                score: 0,
                hand: []
        }
    }

    //Handing out the cards and awarding points that wins based off value 
        // Create the deck then shuffle it as well

    playgame() {
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !== 0) {

            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
        //Now I need to figure out the turns....

        for (let i = 0; i < this.player1.hand.length; i++) {
            
            //Now i need to compare card values 

            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(
                    `P1 Card: ${this.player1.hand[i].name}
                     P2 Card: ${this.player2.hand[i].name}
                     Player 1 wins a point!
                     Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}`)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++                 
                console.log(
                    `P1 Card: ${this.player1.hand[i].name}
                     P2 Card: ${this.player2.hand[i].name}
                     Player 2 wins a point!
                     Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}`)
            }else {
                console.log(
                    `P1 Card: ${this.player1.hand[i].name}
                     P2 Card: ${this.player2.hand[i].name}
                     Tie: No points for either player
                     Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}`)
            }
         }
   // Final results 

         if (this.player1.score > this.player2.score) {
            console.log('Player 1 wins!')
         } else if (this.player2.score > this.player1.score) {
            console.log(' Player 2 wins!') 
         } else {
            console.log('Tie Game')
         }

     }

}


const game = new Game 
game.playgame()








