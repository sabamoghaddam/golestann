const button = document.querySelector(".button");
window.addEventListener("scroll", () => {
  if (window.scrolly <= 20) {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
});

 