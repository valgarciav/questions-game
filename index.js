class GuessingTrivia {
  constructor(element, options = {}) {
    this.useCategoryIds = options.useCategoryIds || [];
    this.useCategoryIds = options.useCategoryIds[(255, 190, 135, 145, 130)];

    // 3 letter words 255, movies 130,food and drink 190, mythology 135, nonfinction 145

    /*fetch this from api */
    this.categories = [];
    this.clues = {};
    this.currentClue = nulll;
    // Form
    this.formElement = element.querySelector(".form");
    this.gameBoardElement = element.querySelector(".game-board");
    this.scoreCountElement = element.querySelector(".score-count");
    this.resultElement = element.querySelector(".results");
    this.resultTextElement = element.querySelector(
      ".result_correct-answer-text"
    );
    this.successTextElement = element.querySelector(".result_success");
    this.failTextElement = element.querySelector(".result_fail");
  }
  //score update on DOM
  initGame() {
    this.updateScore();
    this.fetchCategories();
  }

  updateScore(change) {
    this.score += change;
    this.scoreCountElement.textContent = this.score;
  }

  fetchCategories() {
    const categories = this.useCategoryIds.map((categoryId) => {
      return new Promise((resolve, reject) => {
        fetch(`https://jservice.io/api/category?id=${categoryId}`).then(
          (response) =>
            response.json().then((data) => {
              //console.log(data)
              resolve(data);
            })
        );
      });
    });

    //defines the table
    let table = document.getElementById("table1");

    alert(table.rows.length); // number of rows
    alert(table.rows[5].cells.length); // number of cells in row 5

    alert(table.rows[5].cells[4].innerHTML); // contents of 6th cell in 3rd row

    Promise.all(categories).then((results) => {
      results.forEach((category, categoryIndex) => {
        var newCategory = {
          title: category.title,
          clues: [],
        };

        let clues = shuffle(results.clues)
          .splice(0, 5)
          .forEach((clue, index) => {
            let clueId = categoryIndex + "-" + index;
            newCategory.clues.push(clueId);

            this.clues[clueId] = {
              question: clue.question,
              answer: clue.answer,
              value: (index + 1) * 100,
            };
          });
        this.categories.push(newCategory);
      });
      //  render each category in each column
      this.categories.forEach((c) => {
        this.renderCategories(c);
      });
    });
  }
  renderCategories(category) {
    let column = document.createElement("table");
    column.classList.add("column");
  }
}

let questionCard = window.open("", )





// event listeners
this.gameBoardElement.addEventListener("click", (event) => {
  if (event.target.dataset.clueId) {
    this.handleClueClick(event);
  }
});
this.formElement.addEventListener("submit", (event) => {
  this.handleFormSubmit(event);
});

//shuffle the array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const game = new JeopardyGame(document.querySelector(".app"), {});
game.initGame();
