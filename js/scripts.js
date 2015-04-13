$(document).ready(function() {
  $("#addTask").submit(function(event) {
    var taskInput = $("input#task").val();

    var task = {item: taskInput};

    $(".inprogress").append("<li class='clickable'>" + task.item + "</li>");

    // $(".clickable").last().

    event.preventDefault();
  });





});
