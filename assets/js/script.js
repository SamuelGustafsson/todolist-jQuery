$(document).ready(function () {

   // When task is clicked make it done with line-through
   $('ul').on('click', 'li', function () { 
      $(this).toggleClass('task-done');
   });

   // Delete task
   $('ul').on('click', 'span', function (event) {
      $(this).parent().fadeOut(500, function(){
         $(this).remove();
      })     
      event.stopPropagation();
   });

   // Add task
   $('input').keypress(function (event) {
      if (event.which === 13) {
         var todoHtmlString = "<li><span>X</span> " + $('input').val() + "</li>"
         $('ul').append(todoHtmlString);
         $('input').val("");
      }
   });

   // Toggle add new task
   $('.fa-plus').click(function(){
      $('input[type="text"]').fadeToggle();
   })
});


