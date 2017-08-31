$('.skillbar').each(function(){  //выбраем все .skillbar
  $(this).find('.skillbar-bar').animate({ //поиск элементов на всех уровнях вложенности
    width:$(this).attr('data-percent')
  }, 2000)
})