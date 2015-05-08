$(function() {

  var $list = $('ul');
  var $newTaskForm = $('#new-task-form');
  var $newTaskButton = $('#new-task-button');
  var $closeTaskButton = $('#close-task-form');
  var $editTasksButton = $('#edit-all');
  var $completeTaskButton = $('#complete-task');
  var $clearCompleteButton = $('#clear-complete');

  $newTaskForm.hide();
  $closeTaskButton.hide();

  $newTaskButton.click(function() {
    $newTaskButton.hide();
    $editTasksButton.hide();
    $('#complete-task').hide();
    $clearCompleteButton.hide();
    $newTaskForm.fadeIn(800);
    $closeTaskButton.fadeIn(800);
  });

  $newTaskForm.submit(function() {
    event.preventDefault();
    var taskText = $('input:text').val();
    $list.append('<li><textarea disabled id="task-content">' + taskText + '</textarea></li>');
    $('input:text').val('');
    complete();
  });

  $closeTaskButton.click(function() {
    $newTaskForm.hide();
    $closeTaskButton.hide()
    $newTaskButton.fadeIn(800);
    $editTasksButton.fadeIn(800);
    $clearCompleteButton.fadeIn(800);
    $('textarea').each(function() {
      $(this).prop("disabled", true);
    });
    complete();
  });

  $clearCompleteButton.click(function() {
    $('li#complete').fadeOut();
  });

  $('#edit-all').click(function() {
    $('#complete-task').fadeOut();
    $('li').off();
    $('textarea').each(function() {
      $(this).prop("disabled", false);
    });
    $newTaskButton.hide();
    $editTasksButton.hide();
    $clearCompleteButton.hide();
    $closeTaskButton.fadeIn(800);
  });


  complete = function() {
    $('li:not(#complete)').click(function() {
      $this = $(this);
      $('#complete-task').remove();
      $this.append('<button id="complete-task">complete</button>');
      $('#complete-task').hide();
      $('#complete-task').fadeIn();
      $('#complete-task').click(function () {
        $this.attr('id','complete');
        $this.off();
        $('#complete-task').fadeOut();
      });
    });
  }
  complete();

});
