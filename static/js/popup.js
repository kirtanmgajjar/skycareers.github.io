const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
  window.location.href = "/login";
});
