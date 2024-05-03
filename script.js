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

//nav- dropdown code

document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtns = document.querySelectorAll(".map-navbar .nav-dropdown-btn");
  var dropdownContents = document.querySelectorAll(
    ".map-navbar .nav-dropdown-content"
  );

  dropdownBtns.forEach(function (btn, index) {
    btn.onclick = function () {
      dropdownContents[index].classList.toggle("show");
    };
  });

  window.onclick = function (event) {
    dropdownBtns.forEach(function (btn, index) {
      if (!event.target.matches(".map-navbar .nav-dropdown-btn")) {
        if (dropdownContents[index].classList.contains("show")) {
          dropdownContents[index].classList.remove("show");
        }
      }
    });
  };
});

//dimag kharaab-------------------------------------------------------!

//width------------------------------------------!
const toggleForSmallSize = document.querySelectorAll(".small-size-link");

toggleForSmallSize.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("small-size-map");
    });
    document.querySelectorAll(".small-size-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});

//---
const toggleForFullWidth = document.querySelectorAll(".full-width-link");

toggleForFullWidth.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("full-width-size-map");
    });
    document.querySelectorAll(".small-size-map").forEach(function (el) {
      el.classList.toggle("full-width-size-map");
    });
    document.querySelectorAll(".full-width-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});

//---
const toggleForDefaultWidth = document.querySelectorAll(".defalut-size-link");

toggleForDefaultWidth.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".full-width-size-map").forEach(function (el) {
      el.classList.toggle("default-size-map");
    });
    document.querySelectorAll(".small-size-map").forEach(function (el) {
      el.classList.toggle("default-size-map");
    });
    document.querySelectorAll(".defalut-size-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});

//map layers--------------------!
const toggleGeolayer = document.querySelectorAll(".geographical-layer-link");

toggleGeolayer.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("geographical-layer");
    });
    document
      .querySelectorAll(".geographical-layer-link")
      .forEach(function (el) {
        el.classList.toggle("nav-link-active");
      });
  });
});

//----

const toggleSoillayer = document.querySelectorAll(".soil-layer-link");

toggleSoillayer.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("soil-layer");
    });
    document.querySelectorAll(".soil-layer-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});

//------

const toggleClimatelayer = document.querySelectorAll(".climate-layer-link");

toggleClimatelayer.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("climate-layer");
    });
    document.querySelectorAll(".climate-layer-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});

//----

const toggleSatellitelayer = document.querySelectorAll(".satellite-layer-link");

toggleSatellitelayer.forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nation-map").forEach(function (el) {
      el.classList.toggle("satellite-layer");
    });
    document.querySelectorAll(".satellite-layer-link").forEach(function (el) {
      el.classList.toggle("nav-link-active");
    });
  });
});
