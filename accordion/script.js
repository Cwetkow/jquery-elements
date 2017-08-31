var accordion = function () {
  var data = $(".accordion").attr("data-accordion");

  $(".accordion-header").on("click", function() {
    if (data === "close") { //отследить открыт или закрыт аккордеон
      $(".accordion-body").slideUp();
      if ($(this).hasClass("active")){
        $(this).toggleClass("active");
      }
      else {
        $(".accordion-header").removeClass("active");
        $(this).toggleClass("active");
      }
    }
    else {
      $(this).toggleClass("active");
    } //отследить элемент после .accordion-body исключая элементы которые имеют :animated вкл .slideToggle
    $(this).next(".accordion-body").not(":animated").slideToggle();
  });
}

accordion();