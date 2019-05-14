// Your code goes here

//Header
const navItems = document.querySelectorAll("nav a");
const copyright = document.querySelector(".footer .hidden");
//when "contact" is double clicked, copyright will appear/disappear
navItems[3].addEventListener("dblclick", event => {
  copyright.classList.toggle("hidden");
});

//Buttons
const buttons = document.querySelectorAll(".content-pick .destination .btn");

// buttons[0].addEventListener("click", function() {
//   console.log("I was clicked");
// });
buttons[1].addEventListener("dblclick", function() {
  console.log("I was double clicked");
});
// buttons[2].addEventListener("click", function() {
//   console.log("I was clicked");
// });
buttons.forEach(div =>
  div.addEventListener("click", function() {
    console.log("I was clicked");
  })
);

//
const midTitle = document.querySelector(".content-destination h2");
function logSelection(event) {
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  console.log(`You selected: ${selection}`);
}
midTitle.addEventListener("select", logSelection(event));
