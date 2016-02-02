$(function() {
  $("#myForm").submit(function(event) {
      var loop = parseInt($('input[name=loop]:checked', '#myForm').val());
      var question2 = parseInt($('input[name=q2]:checked', '#myForm').val());
      var question3 = parseInt($('input[name=q3]:checked', '#myForm').val());
      var question4 = parseInt($('input[name=q4]:checked', '#myForm').val());
      var question5 = parseInt($('input[name=q5]:checked', '#myForm').val());
      var total = loop + question2 + question3 + question4 + question5;


      if (total >= 4) {
        $("#quizResults").text("Congatulations, you passed! You got " + total + "/5 right.");
      } else {
        $("#quizResults").text("You're stupid, you only got " + total + "/5, try again.");
      }

      if (loop === 0) {
        $("#question1").css("background-color", "red");
      } if (question2 === 0) {
        $("#question2").css("background-color", "red");
      } if (question3 === 0) {
        $("#question3").css("background-color", "red");
      } if (question4 === 0) {
        $("#question4").css("background-color", "red");
      } if (question5 === 0) {
        $("#question5").css("background-color", "red");
      } else {
        $("question1").css("background-color", "white");
      }

      event.preventDefault();
      console.log(total);
  });
  $("#definition").click(function() {
    $("#documentReadyPanel").slideToggle("slow");
  });
  $("#showQuiz").click(function() {
    $("#myForm").slideToggle("slow");
  });
});
