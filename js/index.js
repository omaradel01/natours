$(".navigation__link").click(function (e) {
  document.querySelector(".navigation__checkbox").checked = false;
});

window.onclick = function (event) {
  if (location.hash === "#popup" && event.target.className === "popup") {
    location.hash = "#section-tours";
  }
};
