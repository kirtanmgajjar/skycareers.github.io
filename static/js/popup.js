
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");


closeButton.addEventListener("click", function() {
  popupOverlay.style.display = "none";
  popup.style.display = "none";
  window.location.href = "/login";
});
