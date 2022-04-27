class GuessingTrivia {
  constructor(element, options = {}) {
    this.categoryIds = [255, 190, 135, 145, 130];
    // Default Categories pulled from https://jservice.io/search:
    // 3 letter words 255, movies 130,food and drink 190, mythology 135, nonfinction 145

    /*fetch this data from API */
    this.categories = { 255: [], 190: [], 135: [], 145: [], 130: [] };

    // Form elements
    this.formElement = document.querySelector(".form");
    this.gameBoardElement = document.querySelector(".table");
    this.scoreCountElement = document.querySelector(".score-count");

    const tr = document.querySelector("#tr");
    const trChildrens = Array.from(tr.children);
    const modal = document.querySelector("#modal");
    const answerInput = document.querySelector("#answerInput");
    const answerButton = document.querySelector("#answerButton");
    const result = document.querySelector("#result");
    const isCorrect = document.querySelector("#isCorrect");
  

  function getQuestionsByCategory(id) {
    const data = this.categories[id];
    return data.map((singleObject) => singleObject.question);
  
  initGame() {
    this.categoryIds.forEach((category) => this.fetchDataByCategory(category));
    // this.fetchCategories();
  }
}
}
}

const game = new GuessingTrivia(document.querySelector(".app"), {});
game.initGame();

const table = document.querySelector("table");
const tableBtns = table.querySelectorAll("button");
console.log(tableBtns);
tableBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.dataset.category;
    const question = game.getQuestionsByCategory(category)[Number(id) + 1];
    console.log(question);
  });
});

// ID for this clue
const clueId = categoryIndex + "-" + index;
category.clues.push(clueId);

let modalToggle = false;
let answer = ""; // Answer is empty as default.

// applying the code for each entry of the array
trChildrens.forEach((child) => {
  child.addEventListener("click", () => {
    console.log("Button has been clicked,open up the modal");
    modalToggle = !modalToggle;
    if (modalToggle) {
      // display the modal if its true
      modal.style.display = "block";
    }
  });
});

answerButton.addEventListener("click", answerCheck); // check answer when clicking the Answer button

function answerCheck() {
  // adding the current value of the input as the answer when user types it in
  answer = answerInput.value;
  answerButton.disabled = true;
  answerButton.removeEventListener("click", answerCheck); //so  user cannot cheat

  // Calling API to get the correct answer
  async function fetchDataByCategory(id) {
    const response = await fetch(`https://jservice.io/api/category?id=${id}`);
    const data = await response.json();
    const answerCheck = data.answerCheck;
    this.categories[id] = [clues[0], clues[1], clues[2], clues[3], clues[4]];
    console.log(this.categories);
  }
  if (answer != "The result of the API") {
    console.log("answer is incorrect");
    isCorrect.textContent = "incorrect";
  } else {
    console.log("answer is correct!");
    isCorrect.textContent = "correct";
  }
  result.textContent = "API result.";
}

   // Score up update from 0 
   updateScore(change);
  this.score = 0;
  this.updateScore(0);
  this.score =+ change;
      this.scoreCountElement.textContent = this.score;
      this.updateScore(this.currentClue.value)


  this.clues[clueId] = {
    question: clue.question,
    answer: clue.answer,
    value: (index + 1) * 100
    };
