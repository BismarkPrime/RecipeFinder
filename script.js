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
    const response = await fetch(url);
    if (!response.ok) {
      console.log("ERROR: the url wasn't valid")
    }
    const recipeJSON = await response.json;
    console.log(recipeJSON);
    return recipeJSON;
  }

  async function useJSON() {
    let myJSON = await fetchRecipeJSON();
    let results = "";
  }

});
