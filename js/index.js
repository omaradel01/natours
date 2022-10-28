$(".navigation__link").click(function (e) {
  document.querySelector(".navigation__checkbox").checked = false;
});

if (location.hash === "#popup") {
  window.onclick = function (event) {
    if (event.target.className === "popup") {
      location.hash = "section-tours";
    }
  };
}
