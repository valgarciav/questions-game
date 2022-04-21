class GuessingTrivia {
  constructor(element, options = {}) {
    this.categoryIds = [255, 190, 135, 145, 130];
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
    const question = game.getQuestionsByCategory(category)[Number(id) - 1];
    console.log(question);
  });
});

//Show the result container
const modal = document.querySelector(".question-card-modal");
/*modal.classList.add("showing-result");*/
