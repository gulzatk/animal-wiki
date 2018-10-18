
$(document).ready(function() {
  $("#turtle-pic").click(function() {
    $("#turtles").show();
    $("#snakes").hide();
    $("#insects").hide();
    });

  $("#snake-pic").click(function() {
    $("#snakes").show();
    $("#turtles").hide();
    $("#insects").hide();

    });
  $("#insect-pic").click(function() {
    $("#insects").show();
    $("#snakes").hide();
    $("#turtles").hide();
    });
});
