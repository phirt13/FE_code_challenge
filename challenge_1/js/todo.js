$(function() {
  var $list = $('ul');
  var $newTaskForm = $('#new-task-form');
  var $newTaskButton = $('#new-task-button');
  var $closeTaskButton = $('#close-task-form');
  var $editTaskButton = $('#edit-task');
  var $updateTaskButton = $('#update-task');
  var $deleteTaskButton = $('#delete-task');

  var hideButtons = function() {
    $('button:not(#new-task-button, #delete-task)').hide()
  }

  $newTaskForm.hide();
  hideButtons();

  $newTaskButton.click(function() {
    $newTaskButton.hide();
    $newTaskForm.fadeIn(800);
    $closeTaskButton.fadeIn(800);
  });

  $newTaskForm.submit(function() {
    event.preventDefault();
    var taskText = $('input:text').val();
    $list.append('<li><textarea disabled id="task-content">' + taskText + '</textarea><button id="edit-task">edit</button><button id="update-task">update</button><button id="delete-task">delete</button></li>');
    $('input:text').val('');
    hideButtons();
    $closeTaskButton.show();
  });

  $closeTaskButton.click(function() {
    $newTaskForm.hide();
    $closeTaskButton.hide()
    $newTaskButton.fadeIn(800);
  });

    $editTaskButton.click(function() {
        $('#task-content').prop('disabled', false);
        $deleteTaskButton.hide();
        $updateTaskButton.show();
      })
});
