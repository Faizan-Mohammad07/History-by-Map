var modalLinks = document.querySelectorAll(".openModal");

modalLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var modalId = link.getAttribute("data-modal-id");
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

var modals = document.querySelectorAll(".modal");

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
document.getElementById("searchInput").addEventListener("input", function () {
  var input, filter, dropdown, countries, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  dropdown = document.querySelector(".dropdown-content");
  countries = dropdown.getElementsByTagName("a");

  for (i = 0; i < countries.length; i++) {
    a = countries[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a.style.display = "";
    } else {
      a.style.display = "none";
    }
  }
});
