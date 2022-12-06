// creating object
let person = {
  name: "Jess",
  chips: 145,
  // declaring function inside object
  sayHello : function(){
    console.log("Hello!");
  }
}
// name, chips, sayHello are methods

// calling function inside object
person.sayHello();
// just similar to document.getElementById or math.random()

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = 0;
let hasBlackjack = false;
let cards = [];
// you can push items into the array
// cards.push(4)
// this is called method, function performed on an object
console.log(cards);
// something for winning the game
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
// another method other than getElementById
// it is the query selector
// goes the query and chooses the CSS selectors
let sumEl = document.querySelector("#sum-el");
let playerEl = document.getElementById("player-el")

// calling the object
playerEl.textContent = person.name + ": $" + person.chips
// can also call like this
// person["name"]

function getRandomCard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber > 10) {
    return 10;
  } else if (randomnumber === 1) {
    return 11;
  } else {
    return randomnumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  console.log(cards);
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // this only renders out the first and secondCard
  cardsEl.textContent = "Cards: ";
  // + cards[0] + " " + cards[1]
  // to render out all the cards
  // need to use array for this
  for (var i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "do you want a draw a new card?";
  } else if (sum === 21) {
    //==== is MORE strict than ==
    // lik if 15r was given as a string ->  sum == "15", the code would still run which isnt exactly correct
    message = "yay! you've won the blackjack game";
    hasBlackjack = true;
  } else {
    message = "you've LOST the blackjack game";
    isAlive = false;
  }
  // console.log(message)
  messageEl.textContent = message;
}

function newCard() {
  console.log("logging a new card from the deck");
  if (isAlive  && !hasBlackjack) {
    // 1. Create a card variable, and hard code its value to a number (2-11)
    cards.push(getRandomCard());
    // 2. Add the new card to the sum variable
    sum += cards[2];

    // 3. Call startGame()
    renderGame();
    // cardsEl.textContent += " " + card}
  }
}
