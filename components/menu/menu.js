// log-btn behaviour

//document.querySelector(".logo-button").addEventListener("click", function () {
//  document.body.classList.toggle("menu-open");
//});

const logoBtn = document.querySelector(".logo-button");
const body = document.body;

logoBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // prevent the click from bubbling to document
  body.classList.toggle("menu-open");
});

// Close the menu when clicking outside the button
document.addEventListener("click", function (event) {
  // Check if the click is NOT inside the logo button or the menu
  if (!event.target.closest(".logo-button") && !event.target.closest(".menu")) {
    body.classList.remove("menu-open");
  }
});

