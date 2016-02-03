<<<<<<< HEAD

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
=======
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


$(document).ready(function() {
  $("form#pizza-options").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select.form-control.size").val();
    var inputtedToppings = $("select.form-control.toppings").val();
    var inputtedToppingsVal = inputtedToppings.length;
    var toppingString = inputtedToppings.join(", ")
    var inputtedQuantity = parseInt($("input#quantity").val());

    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedQuantity);

    var inputtedSizeVal = newPizza.sizePriceCalc();
    var totalPrice = (inputtedSizeVal + inputtedToppingsVal) * inputtedQuantity;

    function print(orderdetails) {
      var outputDiv = document.getElementById('output');
  		outputDiv.innerHTML = orderdetails;
    }

    $( "div#output" ).slideDown( "slow", function() {
      $('html, body').animate({
        scrollTop: $("#output").offset().top
      }, 800);
      $("div#output").html('<div class="result container-fluid">' +
        '<div class="container">' +
          '<h3>Thank you for ordering ' +
          inputtedQuantity +
          ' <em>"' +
          toppingString +
          ' pizza(s)"</em></h3>' +
          '<h2>Your total is $' +
          totalPrice +
          '.00 dollars</h2>' +
          '<div class="video-container">' +
            '<iframe width="800px" height="450px" src="https://www.youtube.com/embed/CJEoASUMZbI" frameborder="0" allowfullscreen></iframe>' +
          '</div>' +
        '</div>' +
      '</div>');
    });
  });
>>>>>>> refs/remotes/origin/master
});

