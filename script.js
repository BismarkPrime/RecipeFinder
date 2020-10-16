document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  let value2 = document.getElementById("ingredientInput").value;
  if (value === "" && value2 === "")
    return;
  console.log(value);
  value2 = value2.replace(",\s", ',');

  console.log(value2);

  var myUrl = "https://cors-anywhere.herokuapp.com";
   myUrl += "/http://www.recipepuppy.com/api/?i=" + value2 + "&q=" + value;
  useJSON();
  async function fetchRecipeJSON() {
    const response = await fetch(myUrl, {mode: 'cors'});
    let recipeJSON = await response.json();
    console.log(recipeJSON);
    return recipeJSON;
  }

  async function useJSON() {
    let passedHalf = false;
    let json = await fetchRecipeJSON();
    let results = "";
    results += "<div class='container'>";
    results += "<div class='row'> <div class='col-md-6'>";
    for (let i = 0; i < json.results.length; i++) {
      let myIngStr = json.results[i].ingredients;
      let myIngArr = myIngStr.split(", ");
      let myPic = json.results[i].thumbnail;
      let myLink = json.results[i].href;
      if (i >= (json.results.length / 2) && !passedHalf) {
        passedHalf = true;
        results += "</div><div class='col-md-6'>";
      }
      results += "<div class='card bg-light mb-3 d-flex align-items-center' style='max-width: 25rem; box-shadow: 0px 0px 8px 3px #888888; margin-left: auto; margin-right:auto;'>";
      results += "<div class='card-header text-center'><img  style='border-radius: 15px; box-shadow: 0px 0px 8px 2px #888888;' src=" + myPic + "></div>";
      results += "<div class='card-body'>";
      results += "<h5 class='card-title'><a href =" + myLink + ">"+ json.results[i].title + "</a></h5>";
      results += "<div class='card-text' style='font-weight: bold;'>";
      results += "Ingredient List:";
      results += "<ul style='font-weight: normal;'>";
      for (let j = 0; j < myIngArr.length; j++) {
        results += "<li style='text-transform: capitalize;'>" + myIngArr[j] + "</li>";
      }
      results += "</ul>";
      results += "</div>";
      results += "</div>";
      results += "</div>";
/*<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/
    }
    results += "</div>"; //close last column
    results += "</div>"; //close last row
    document.getElementById("searchResults").innerHTML = results;
  }

});
