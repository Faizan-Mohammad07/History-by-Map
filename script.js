var modal = document.getElementById("myModal");

var link = document.getElementById("openModal");

var closeBtn = document.getElementsByClassName("close")[0];

link.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("closeModal").onclick = function () {
  modal.style.display = "none";
};
