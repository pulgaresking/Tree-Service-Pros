function toggleMenu() {
  let menu = document.querySelector(".links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}