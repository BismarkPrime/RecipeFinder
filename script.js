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
      results += json.results[i].title;
    }
    document.getElementById("")
  }

});
