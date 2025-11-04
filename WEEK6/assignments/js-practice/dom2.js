const heading = document.getElementById("main-heading");
const paragraph = document.getElementById("paragraph");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");





heading.textContent = "Welcome to My JavaScript DOM Page!";
paragraph.textContent = "This text was changed using external JS.";




changeTextBtn.onclick = function () {
  heading.textContent = "You clicked the Change Text button!";
  paragraph.textContent = "The paragraph has also changed dynamically.";
};




changeColorBtn.onclick = function () {
  document.body.style.backgroundColor = "lightblue";
  heading.style.color = "darkred";
  paragraph.style.color = "darkgreen";
};