/* Let's build a deck of cards! 

Resources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://www.w3schools.com/js/

A deck of cards contains 4 suits, 'Hearts', 'Clubs', 'Diamonds', 'Spades' each containing the following ranks, 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'. Let's create an array that contains all 52 cards! */
// ------------------------------------------------------

// Create a function called 'createDeck'.
function createDeck() {
  // In this function, create an array that contains the 4 suits of cards and name it 'suits'.
  // Example: Hearts, Clubs, Diamonds and Spades.
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  // Create an array that contains each number card and picture card and name it 'ranks'.
  // Example: Ace, 2 - 10, Jack, Queen, King.
  var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  // Create an empty array named 'deck'.
  var deck = [];
  // Create a 'for loop' that cycles through the 4 suits of cards.
  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    // In the 'for loop', create another 'for loop' to cycle through the 'ranks' array.
    for (var rankCounter = 0; rankCounter < 13; rankCounter++){
      // Log the ranks and suits your loops create within this 'for loop'.
      // Example: 6 of Clubs
      //console.log(ranks[rankCounter] + ' of ' + suits[suitCounter]);
      // Also, push each result to the deck array.
      deck.push(ranks[rankCounter] + ' of ' + suits[suitCounter]);
    }

  }

  // Return the 'deck' array
  return deck;

}

createDeck();



/* Let's shuffle that deck of cards! */
// ------------------------------------------------------

function shuffleDeck(deck){

  // In this function, create a 'for loop' that cycles through all 52 cards of the 'deck' array.
  for(var i = 0; i < deck.length; i++){
    // Create a temporary variable using the 'deck' array and the counter from the 'for loop' and name it 'tempCard'.
    // Example: deck[i]
    var tempCard = deck[i];
    // Create a temporary variable using a random number from the 'deck' array length and name it 'randomIndex'.
    var randomIndex = Math.floor(Math.random() * deck.length);
    // Replace the 'deck' array element using the counter from the 'for loop' with a 'deck' array element using the 'randomIndex'.
    deck[i] = deck[randomIndex];
    // Replace the 'deck' array element using the 'randomIndex' with the 'tempCard' variable we stored before.
    deck[randomIndex] = tempCard;
  }
}
// Create a variable that when called, runs the 'createDeck' function and name it 'testDeck'.
var testDeck = createDeck();
// Pass the 'testDeck' variable as the parameter in our newly created 'shuffleDeck' function.
shuffleDeck(testDeck);
// Log 'testDeck'
//console.log(testDeck);






/* Let's draw 5 cards! */
// ------------------------------------------------------

// Create an empty array and name it 'myHand'.
var myHand = [];

// Create a function and name it 'drawFive'.
function drawFive(){
  // Create a 'for loop' that cycles through 5 cards.
  for (var cardsDrawn = 0; cardsDrawn < 5; cardsDrawn++) {
    // Push the 'testDeck' array element using the counter from the 'for loop'to the 'myHand' array.
    myHand.push(testDeck[cardsDrawn]);
  }
  // Log 'myHand' after the 'for loop' finishes but before closing the 'drawFive' function.
  console.log(myHand);
}

// Run the 'drawFive' function.
drawFive();

