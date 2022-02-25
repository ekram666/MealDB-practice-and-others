const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const errorMessage = document.getElementById('error');
    const searchText = searchField.value; 
    // console.log(searchText);

    searchField.value = ' ';
    document.getElementById('button-search')
        if(!isNaN(searchText)||searchText == ''){
            errorMessage.innerText = 'Write some food name';
     
         }
         else if(searchText <= 0){
             errorMessage.innerText = 'Give a valid name';
         }
         else{
             const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
          
          fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.meals));
          errorMessage.innerText = '';
         }   
          
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent =' ';
    
    if(meals.length == 0){
        searchResult.innerText = "No result is found";
    }
    meals.forEach(meal =>{
    //    console.log(meal); 
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML= `
       <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
       `;
       console.log(meal.strMeal);
       searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
//    console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    

    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div);
}