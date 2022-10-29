$(".navigation__link").click(function (e) {
  document.querySelector(".navigation__checkbox").checked = false;
});

window.onclick = function (event) {
  if (location.hash === "#popup" && event.target.className === "popup") {
    location.hash = "#section-tours";
  }
};

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#popup"]')
  .not('[href="#0"]')
  .on("click", function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
        if (location.hash === "#popup") {
          console.log(event);
          if (event.target.className === "btn btn--green" || event.target.className === "popup__close") {
            location.hash = event.target.hash;
          }
        }
      }
    }
  });
