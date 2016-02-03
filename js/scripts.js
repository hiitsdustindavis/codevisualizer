
 function quizConstructor(question, answer1, answer2, answer3, answer4) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
    }

    // Create quiz array
    var quiz = new Array();

    // All quiz questions and answers
    quiz[0] = new quizConstructor("question", "answer1", "answer2", "answer3", "answer4");
    quiz[1] = new quizConstructor("question1", "answer1", "answer2", "answer3", "answer4");
    quiz[2] = new quizConstructor("question2", "answer1", "answer2", "answer3", "answer4");
    quiz[3] = new quizConstructor("question3", "answer1", "answer2", "answer3", "answer4");
    quiz[4] = new quizConstructor("question4", "answer1", "answer2", "answer3", "answer4");
    quiz[5] = new quizConstructor("question5", "answer1", "answer2", "answer3", "answer4");
    quiz[6] = new quizConstructor("question6", "answer1", "answer2", "answer3", "answer4");
    quiz[7] = new quizConstructor("question7", "answer1", "answer2", "answer3", "answer4");
    quiz[8] = new quizConstructor("question8", "answer1", "answer2", "answer3", "answer4");
    quiz[9] = new quizConstructor("question9", "answer1", "answer2", "answer3", "answer4");


 $(function() {
  $("#myForm").submit(function(event) {
      var userAnswer = parseInt($('input[name=answer]:checked', '#myForm').val());
      
      if (userAnswer === 1) {
        $("#quizResults").text("Congatulations, you passed!");
      } else {
        $("#quizResults").text("You're stupid, try again.");
      }

      event.preventDefault();
  });

   $("#definition").click(function() {
    $("#documentReadyPanel").slideToggle("slow");
  });
  
       
        // Ask question
      $("#showQuiz").click(function() {
        $("#myForm").show();
        var ri = Math.floor(Math.random() * quiz.length);
        var question = quiz[ri].question;
        var answer1 = quiz[ri].answer1;
        var answer2 = quiz[ri].answer2;
        var answer3 = quiz[ri].answer3;
        var answer4 = quiz[ri].answer4;

        $("#question").text(question);
        $("#answer1").text(answer1);
        $("#answer2").text(answer2);
        $("#answer3").text(answer3);
        $("#answer4").text(answer4);
    });
});

