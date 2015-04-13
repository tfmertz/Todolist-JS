$(document).ready(function() {
  $("#addTask").submit(function(event) {
    var taskInput = $("input#task").val();

    var task = {item: taskInput};

    $(".inprogress").append("<li><span class='glyphicon glyphicon-ok clickable'></span>" + task.item + "</li>").addClass("in-progress");

    $(".clickable").last().click(function() {
      $(this).parent().remove();
      var testTaskItem = task.item;
      $(".complete").prepend("<li>" + task.item + "</li>").addClass("complete");
    });

    $("input#task").val("").focus();


    event.preventDefault();
  });




});
