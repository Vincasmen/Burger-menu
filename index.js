const burgerBtn = document.getElementById("burger-btn");
const toggleMenu = document.querySelector("ul");
const brgrMenuOpen = document.querySelector("ul");
const brgrMenuClose = document.querySelector("ul");

// const openBrgrMenu = function () {
//   brgrMenuOpen.classList.remove("hidden");
// };
// const closeBrgrMenu = function () {
//   brgrMenuOpen.classList.add("hidden");
// };

//Toggling between classes//

const toggle = function () {
  toggleMenu.classList.toggle("hidden");
};

burgerBtn.addEventListener("click", function () {
  console.log("clicked");
  toggle();
});
