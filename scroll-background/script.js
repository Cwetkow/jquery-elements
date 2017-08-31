$(window).ready(function() {
  //возврат высоты элемента без учета отступов и толщины рамки
  var wHeight = $(window).height(); 

  $('.slide')
  .height(wHeight) //вычислить высоту страницы
  .scrollie({
    //расстояние ниже окна, которое активирует функцию обратного вызова прокрутки (-50px)
    scrollOffset: -50,
    scrollingInView: function(elem) {
      var bgColor = elem.data('background'); //считать data аттрибут bg color

      $('body').css('background-color', bgColor); //замена считанного цвета методом css
    }
  });
});