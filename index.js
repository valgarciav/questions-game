class GuessingTrivia {
  constructor(element, options = {}) {
    this.categoryIds = [255, 190, 135, 145, 130];
    // Default Categories pulled from https://jservice.io/search:
    // 3 letter words 255, movies 130,food and drink 190, mythology 135, nonfinction 145

    /*fetch this from api */
    this.categories = { 255: [], 190: [], 135: [], 145: [], 130: [] };

    // Form elements
    this.formElement = document.querySelector(".form");
    this.gameBoardElement = document.querySelector(".table");
    this.scoreCountElement = document.querySelector(".score-count");
    this.resultElement = document.querySelector(".results");
    this.resultTextElement = document.querySelector(
      ".result_correct-answer-text"
    );
    this.successTextElement = document.querySelector(".result_success");
    this.failTextElement = document.querySelector(".result_fail");
    this.answer = document.querySelector("input[name=user-answer]");
  }


  async fetchDataByCategory(id) {
    const response = await fetch(`https://jservice.io/api/category?id=${id}`);
    const data = await response.json();
    const clues = data.clues;
    this.categories[id] = [clues[0], clues[1], clues[2], clues[3], clues[4]];
    console.log(this.categories);
  }

  getQuestionsByCategory(id) {
    const data = this.categories[id];
    return data.map((singleObject) => singleObject.question);
  }

  //score update on DOM
  initGame() {
    this.categoryIds.forEach((category) => this.fetchDataByCategory(category));
    // this.fetchCategories();
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
    const id = e.target.id;
    const question = game.getQuestionsByCategory(category)[Number(id) + 1];
    console.log(question);
  });
});

 //Create unique ID for this clue
 const clueId = categoryIndex + "-" + index;
 category.clues.push(clueId);

 //Add clue to DB
this.clues[clueId] = {
question: clue.question,
answer: clue.answer,
value: (index + 1) * 100
};
         
const tr = document.querySelector("#tr")
const trChildrens = Array.from(tr.children)

trChildrens.forEach(child => {
  child.addEventListener("click", () => {
    console.log("Hey, I've been clicked!.")
  })
})


const modal_container = document.getElementById('modal-container');
trChildrens.addEventListener('click', () => {
    modal_container.classList.show('modal-container');
});






/*
// Form pop up 

function handleFormSubmit(onclick) {
    document.getElementById("form").tableBtns 
    onclick.preventDefault();
    var isCorrect = this.cleanseAnswer(this.inputElement.value) === this.cleanseAnswer(this.currentClue.answer);
      if (isCorrect) {
         this.updateScore(this.currentClue.value);
      }
    }

    function handleClueClick(onclick) {
        var clue = this.clues[onclick.target.dataset.clueId];
  
        
        onclick.target.classList.add("used");
        this.inputElement.value = "";
        this.currentClue = clue;
        //Update the text
        this.clueTextElement.textContent = this.currentClue.question;
        this.resultTextElement.textContent = this.currentClue.answer;
  
        //Hide the result
        this.modalElement.classList.remove("showing-result");
        
        //Show the modal
        this.modalElement.classList.add("visible");
        this.answerElement.focus();
    
  
     //Handle an answer from user
     handleFormSubmit(onclick) {
        onclick.preventDefault();

        //Handle an answer from user
   handleFormSubmit(event) {
    event.preventDefault();
    
    var isCorrect = this.cleanseAnswer(this.inputElement.value) === this.cleanseAnswer(this.currentClue.answer);
    if (isCorrect) {

        this.updateScore(this.currentClue.value);
      }

      //Show answer
      this.revealAnswer(isCorrect);
   }
   
     }
    }


//SCORE
updateScore(change) {
    this.score = [0];
    this.score += change;
    this.scoreCountElement.textContent = this.score;
 }
 */
 