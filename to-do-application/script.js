$(function() {
  var $tasksList = $("#tasksList");
  var $taskInput = $("#taskInput");
  var $notification = $("#notification");

  var displayNotification = function() {
    if (!$tasksList.children().length) { //подсчет количества элементов в списке
      $notification.fadeIn("fast"); //появление элемента
    } else {
      $notification.css("display", "none") //иначе сменим свойство на display: none
    }
  }

  //присоединим обработчик событий к кнопке элемента
  $("#taskAdd").on("click" , function() {
    if(!$taskInput.val()) {return false;} //если input пуст - возврат return
    //добавляем li с введенным значением в taskInput и добавляем кнопку для удаления
    $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");
    //очистить input после добавления события
    $taskInput.val("");
    //для отображения или скрытия всех заданий
    displayNotification();
    //подключить обработчик событий кнопке удаления
    $(".delete").on("click", function() {
      var $parent = $(this).parent(); 

      $parent.css("animation" ,"fadeOut .3s linear"); 
      
      setTimeout(function(){
        $parent.remove();
        displayNotification();
      }, 295);
    });
  });
});