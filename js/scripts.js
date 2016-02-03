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

function Pizza(pizzaSize, toppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaQuantity = pizzaQuantity
}

Pizza.prototype.sizePriceCalc = function() {
  if (this.pizzaSize === "Medium") {
    return 8;
  } else {
  }
    return 12;
}

Pizza.prototype.toppingsPriceCalc = function() {
  var totalToppings = this.pizzaToppings.length;
  return totalToppings;
}

Pizza.prototype.totalPriceCalc = function() {
    return this.pizzaTotalPrice = (this.sizePriceCalc() + this.toppingsPriceCalc()) * this.pizzaQuantity;
}

// START! QUIZ BUSINESS LOGIC

  // LOOK UNDER THE HOOD & QUIZ
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
  // END   LOOK UNDER THE HOOD & QUIZ
  // END! USER INTERFACE LOGIC

});

