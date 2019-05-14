// Your code goes here

//Header
const navItems = document.querySelectorAll("nav a");
const copyright = document.querySelector(".footer .hidden");
//when "contact" is double clicked, copyright will appear/disappear
navItems[3].addEventListener("dblclick", event => {
  copyright.classList.toggle("hidden");
});

navItems.forEach(a =>
  a.addEventListener("click", event => {
    event.target.style.color = "orange";
  })
);
navItems.forEach(a =>
  a.addEventListener("mouseup", event => {
    event.target.style.fontSize = "2rem";
  })
);

//Text Content
const txtContent = document.querySelectorAll("p");
txtContent[3].addEventListener("dblclick", event => {
  event.target.style.fontSize = "2rem";
});

txtContent[0].addEventListener("mouseover", event => {
  event.target.style.color = "blue";
});

//Buttons
const buttons = document.querySelectorAll(".content-pick .destination .btn");

buttons.forEach(div =>
  div.addEventListener("click", function() {
    console.log("I was clicked");
  })
);

buttons[1].addEventListener("dblclick", function(event) {
  console.log("I was double clicked", event);
});
buttons[2].addEventListener("click", function(event) {
  event.target.style.color = "green";
});

//Titles
// const midTitle = document.querySelector(".content-destination h2");
// function logSelection(event) {
//   const selection = event.target.value.substring(
//     event.target.selectionStart,
//     event.target.selectionEnd
//   );
//   console.log(`You selected: ${selection}`);
// }
// midTitle.addEventListener("select", logSelection(event));
