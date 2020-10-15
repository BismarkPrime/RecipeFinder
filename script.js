document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);

  var myUrl = "https://cors-anywhere.herokuapp.com";
   myUrl += "/http://www.recipepuppy.com/api/?q=" + value;
  useJSON();
  async function fetchRecipeJSON() {
    const response = await fetch(myUrl, {mode: 'cors'});
    let recipeJSON = await response.json();
    console.log(recipeJSON);
    return recipeJSON;
  }

  async function useJSON() {
    let json = await fetchRecipeJSON();
    let results = "";
    for (let i = 0; i < json.results.length; i++) {

      let myIngStr = json.results[i].ingredients;
      let myIngArr = myIngStr.split(", ");
      let myPic = json.results[i].thumbnail;

      results += "<div class='card bg-light mb-3' style='max-width: 18rem;'>";
      results += "<div class='card-header'><img src=" +  myPic + "></div>";
      results += "<div class='card-body'>";
      results += "<h5 class='card-title'>" + json.results[i].title + "</h5>";
      results += "<p class='card-text'>";
      results += "<ul>";
      for (let j = 0; j < myIngArr.length; j++) {
        results += "<li>" + myIngArr[j] + "</li>";
      }
      results += "</ul>";
      results += "</p>";
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
    document.getElementById("searchResults").innerHTML = results;
  }

});
