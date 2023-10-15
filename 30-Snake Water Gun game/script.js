alert("Welcome to Snake, Water and Gun Game!!!");
let letters = ["Snake", "Water", "Gun"];
let randomIndex = Math.floor(Math.random()*letters.length);
// document.write(randomLetter);

let userScore = 0;
let computerScore = 0;
let chances = 5;

while(chances--){
  let randomLetter = letters[randomIndex];
  let userInput = prompt("Snake - Water - Gun");
  if(randomLetter == userInput){
    alert("It's a tie!")
  }
  else if(randomLetter == "Snake"){
    if(userInput == "Water"){
      computerScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  Computer Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else if(randomLetter == "Snake"){
    if(userInput == "Gun"){
      userScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  You Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else if(randomLetter == "Water"){
    if(userInput == "Snake"){
      userScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  You Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else if(randomLetter == "Water"){
    if(userInput == "Gun"){
      computerScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  Computer Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else if(randomLetter == "Gun"){
    if(userInput == "Snake"){
      computerScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  Computer Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else if(randomLetter == "Gun"){
    if(userInput == "Water"){
      userScore++;
      alert("You choose: " + userInput + " Computer choose: " + randomLetter + "  You Won!" + "\nYour score: " + userScore + "  Computer Score: " + computerScore);
    }
  }
  else{
    alert("Invalid choice!")
  }
}




