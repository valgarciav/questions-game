class GuessingTrivia {
    constructor (element, options={}){
        this.useCategoryIds = options.useCategoryIds || [];


        //categories 
        this.useCategoryIds = options.useCategoryIds [255,215,190,135,145]

        // 3 letter words 255
        //food 215
        //food and drink 190
        // mythology 135
        //nonfinction 145

        
        /*fetch this from api */
        this.categories = [];
        this.clues = {};

        renderCategory(category) {      
            let column = document.createElement("div");
            column.classList.add("column");
            column.innerHTML = (
               `<header>${category.title}</header>
               <ul>
               </ul>`
            ).trim();


        /* score board */
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

    }
    this.fetchCategories();


    


// buttons for each category

// Form
this.formElement = element.querySelector(".form");
this.gameBoardElement = element.querySelector(".game-board");
this.scoreCountElement = element.querySelector(".score-count");
this.resultElement = element.querySelector(".results");
this.resultTextElement = element.querySelector(".result_correct-answer-text");
this.successTextElement = element.querySelector(".result_success");
this.failTextElement = element.querySelector(".result_fail");

}};




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



//reset button



// results if else 


//clues








