class GuessingTrivia {
    constructor (element, options={}){
        this.useCategoryIds = options.useCategoryIds || [];


        //categories 
        this.useCategoryIds = options.useCategoryIds [255,190,135,145,130]

        // 3 letter words 255
        //movies 130
        //food and drink 190
        // mythology 135
        //nonfinction 145

        
        /*fetch this from api */
        this.categories = [];
        this.clues = {};


    let table = document.getElementById('table1');

        alert(table.rows.length);                // number of rows
        alert(table.rows[5].cells.length);       // number of cells in row 5
        
        alert(table.rows[5].cells[4].innerHTML); // contents of 6th cell in 3rd row
        
    
    
   


        /*
        renderCategory(category) {      
            let column = document.createElement("div");
            column.classList.add("column");
            column.innerHTML = (
               `<header>${th.table}</header>
               <ul>
               </ul>`
            ).trim();
            */

        /*score board */
        this.score = 0;
        this.updateScore(0);



        fetchCategories() {
            const categories = this.useCategoryIds.map(categoryId => {
                return new Promise((resolve, reject) => {
                    fetch(`https://jservice.io/api/category?id={category}`)
                    .then( response => response.json().then(data => {
                        console.log(data)
                        resolve(data)
                    }))
                })
            })
        }
        this.fetchCategories();
    }








// buttons for cells
let btn = document.createElement




// Form
this.formElement = element.querySelector(".form");
this.gameBoardElement = element.querySelector(".game-board");
this.scoreCountElement = element.querySelector(".score-count");
this.resultElement = element.querySelector(".results");
this.resultTextElement = element.querySelector(".result_correct-answer-text");
this.successTextElement = element.querySelector(".result_success");
this.failTextElement = element.querySelector(".result_fail");


/*
// event listeners
this.gameBoardElement.addEventListener("click", event => {
    if (event.target.dataset.clueId) {
       this.handleClueClick(event);
    }
 });
 this.formElement.addEventListener("submit", event => {
    this.handleFormSubmit(event);
 });
 
 //Render initial state of score
 this.updateScore(0);
 
 //Kick off the category fetch
 this.fetchCategories();
*/

//Fetch all of the data from the API
fetchCategories() {      
 const categories = this.useCategoryIds.map(category_id => {
    return new Promise((resolve, reject) => {
        fetch(`https://jservice.io/api/category?id=${category_id}`)
               .then(response => response.json()).then(data => {
                  resolve(data);
               });
         });
      })};


// submit button



//reset  button



// results if else 


//clues


// Add to DOM


//score
updateScore(change) {
    this.score += change;
    this.scoreCountElement.textContent = this.score;
 }



//buttons used
//Clear out the input field
this.inputElement.value = "";
      
//Update current clue
this.currentClue = clue;


