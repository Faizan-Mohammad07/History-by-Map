// Get all elements with the class "openModal"
var modalLinks = document.querySelectorAll(".openModal");

// Loop through each modal link to add event listeners
modalLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var modalId = link.getAttribute("data-modal-id");
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Get all elements with the class "modal"
var modals = document.querySelectorAll(".modal");

// Loop through each modal to add close functionality
modals.forEach(function (modal) {
  var closeButton = modal.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
