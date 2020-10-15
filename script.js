document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);


  const url = "http://www.recipepuppy.com/api/?q=" + value;
  async function fetchRecipeJSON() {
    const response = await fetch(url);
    const recipeJSON = await response;
    console.log(recipeJSON);
  }
  fetchRecipeJSON();


});
