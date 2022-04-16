class GuessingTrivia {
    constructor (element, options={}){
        this.useCategoryIds = topns.useCategoryIds || [];


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
}




// buttons for each category

// form to type in answer



// submit button



//reset button



// results if else 


//clues








