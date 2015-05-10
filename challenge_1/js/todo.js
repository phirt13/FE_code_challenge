$(function() {

  var $list = $('ul');
  var $newTaskForm = $('#new-task-form');
  var $newTaskButton = $('#new-task-button');
  var $closeTaskButton = $('#close-options');
  var $editTasksButton = $('#edit-tasks');
  var $clearCompleteButton = $('#clear-complete');
  var $deleteTaskButton = $('#delete-task');

  $newTaskForm.hide();
  $closeTaskButton.hide();
  $deleteTaskButton.hide();

  $newTaskButton.click(function() {
    $newTaskButton.hide();
    $editTasksButton.hide();
    $clearCompleteButton.hide();
    $('#complete-task').hide();
    $newTaskForm.fadeIn(800);
    $closeTaskButton.fadeIn(800);
  });

  $newTaskForm.submit(function() {
    event.preventDefault();
    if(($('input').val() === '')) {
    $('input').attr('placeholder', 'please create a task');
    } else {
      var taskText = $('input:text').val();
      $list.append('<li><textarea disabled id="task-content">' + taskText + '</textarea></li>');
      $('input:text').val('');
      $('input').attr('placeholder', 'new task');
      complete();
    }
  });

  $closeTaskButton.click(function() {
    $newTaskForm.hide();
    $closeTaskButton.hide();
    $newTaskButton.fadeIn(800);
    $editTasksButton.fadeIn(800);
    $clearCompleteButton.fadeIn(800);
    $('li').each(function() {
      $(this).children('button').remove();
    });
    $('textarea').each(function() {
      $(this).prop("disabled", true);
    });
    $('textarea:not(#task-complete').each(function() {
      $(this).attr('id', 'task-content')
    });
    $('input').attr('placeholder', 'new task');
    complete();
  });

  $clearCompleteButton.click(function() {
    $('li#complete').fadeOut(800);
  });

  $editTasksButton.click(function() {
    $('#complete-task').hide();
    $('li').off();
    $('li').each(function() {
      $(this).append('<button class="delete-task">del</button>');
    });
    $('button').filter('.delete-task').each(function() {
      $(this).click(function() {
        $(this).parent().remove();
      });
    });
    $('textarea:not(#task-complete)').each(function() {
      $(this).prop("disabled", false);
      $(this).attr('id', 'edit-task-content');
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
      var $completeTaskButton = $('#complete-task');
      $completeTaskButton.hide();
      $completeTaskButton.fadeIn();
      $completeTaskButton.click(function () {
        $this.attr('id','complete');
        $this.children('textarea').attr('id', 'task-complete');
        $this.off();
        $completeTaskButton.fadeOut();
      });
    });
  }
  complete();

});
