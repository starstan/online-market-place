$(document).ready(function() {
  $("#button").click(function() {
    $("#form-hide").slideUp();
    $("#table-show").show();

    event.preventDefault();

  });

});
