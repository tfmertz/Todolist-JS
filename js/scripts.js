$(document).ready(function() {
  $("#addTask").submit(function(event) {

    var taskInput = $("input#task").val();

    var task = {item: taskInput};

    $(".inprogress").append("<li><span class='glyphicon glyphicon-ok clickable addTask'></span>" + task.item + "</li>");

    $(".addTask").last().click(function() {
      $(this).parent().remove();
      $(".complete").prepend("<li><span class='glyphicon glyphicon-arrow-left clickable renewTask'></span><span class='glyphicon glyphicon-remove deleteTask clickable'></span>" + task.item + "</li>");
      makeCompleteListeners();
    });

    $("input#task").val("").focus();
    event.preventDefault();
  });
});

var makeCompleteListeners = function() {
  $('.renewTask').unbind('click');
  $('.renewTask').click(function() {
    $(".inprogress").append("<li><span class='glyphicon glyphicon-ok clickable addTask'></span>" + $(this).parent().text() + "</li>");
    $(this).parent().remove();
    makeProgressListeners();
  });
};

var makeProgressListeners = function() {
  $('.addTask').unbind('click');
  $('.addTask').click(function() {
    $(this).parent().remove();
    $(".complete").prepend("<li><span class='glyphicon glyphicon-arrow-left clickable renewTask'></span><span class='glyphicon glyphicon-remove deleteTask clickable'></span>" + $(this).parent().text() + "</li>");
    makeCompleteListeners();
  });
};
