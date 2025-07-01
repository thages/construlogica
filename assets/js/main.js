(function ($) {
  var $window = $(window),
    $body = $("body"),
    settings = {
      // Carousels
      carousels: {
        speed: 4,
        fadeIn: true,
        fadeDelay: 250,
      },
    };

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["961px", "1280px"],
    narrow: ["841px", "960px"],
    narrower: ["737px", "840px"],
    mobile: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    speed: 350,
    noOpenerFade: true,
    alignment: "center",
  });

  // Scrolly.
  $(".scrolly").scrolly();

  // Nav.

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);
