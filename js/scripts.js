
function quizConstructor(question, answer1, answer2, answer3) {

        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
    }


    // Create quiz array
    var questionCounter = 0;
    var quiz = new Array();

    // All quiz questions and answers
    quiz[0] = new quizConstructor("Prototypes are which?: ","<input type='radio' name='answer' id='once' value=0> A model of your website","<input type='radio' name='answer' id='once' value=1>A property whose value is a function","<input type='radio' name='answer' id='once' value=0>Objects from which other objects inherit");
    quiz[1] = new quizConstructor("Booleans, numbers, and strings are: ","<input type='radio' name='answer' id='once' value=0>Always objects in JavaScript.","<input type='radio' name='answer' id='once' value=0>Sometimes objects.","<input type='radio' name='answer' id='once' value=1>Never objects.");
    quiz[2] = new quizConstructor("Loops are used for: ","<input type='radio' name='answer' id='once' value=1>Looping through a block of code a number of times.","<input type='radio' name='answer' id='once' value=0>Looping your JavaScript together with your HTML.","<input type='radio' name='answer' id='once' value=0>Looping through your specs.");
    quiz[3] = new quizConstructor("The code responsible for handling the evaluation and manipulation of data is: ","<input type='radio' name='answer' id='once' value=0>UI Logic","<input type='radio' name='answer' id='once' value=1>Business Logic","<input type='radio' name='answer' id='once' value=0>Inductive Logic");
    quiz[4] = new quizConstructor("A function that can be invoked using a new keyword to create new objects is: ","<input type='radio' name='answer' id='once' value=1>Constructor.","<input type='radio' name='answer' id='once' value=0>Creator.","<input type='radio' name='answer' id='once' value=0>Variable.");
    quiz[5] = new quizConstructor("A variable declared outside a function is: ","<input type='radio' name='answer' id='once' value=0>Local, only usable with one function.", "<input type='radio' name='answer' id='once' value=1>Global, usable with all functions.", "<input type='radio' name='answer' id='once' value=0>Literal.");
    quiz[6] = new quizConstructor("In JavaScript, a block of code designed to perform a particular task is a: ","<input type='radio' name='answer' id='once' value=0>Parameter.","<input type='radio' name='answer' id='once' value=0>Variable.","<input type='radio' name='answer' id='once' value=1>Function.");


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
    $("#myCarousel").slideToggle("slow");
  });

      $("#nextQuestion").click(function() {
        if (questionCounter < 7) {
        //var ri = Math.floor(Math.random() * 7);
        var question = quiz[questionCounter].question;
        var answer1 = quiz[questionCounter].answer1;
        var answer2 = quiz[questionCounter].answer2;
        var answer3 = quiz[questionCounter].answer3;
      
        $("#question").empty().append(question);
        $("#answer1").empty().append(answer1);
        $("#answer2").empty().append(answer2);
        $("#answer3").empty().append(answer3);
        $("#quizResults").empty();
        delete quiz[questionCounter];
        questionCounter += 1;
        } else {
          $("#quizResults").text("Out of Questions!");
        }
    });

        // Ask question
      $("#showQuiz").click(function() {
        $("#myForm").show();
        //var ri = Math.floor(Math.random() * quiz.length);
        var question = quiz[0].question;
        var answer1 = quiz[0].answer1;
        var answer2 = quiz[0].answer2;
        var answer3 = quiz[0].answer3;

        delete quiz[0];
        questionCounter += 1;

        $("#question").empty().append(question);
        $("#answer1").empty().append(answer1);
        $("#answer2").empty().append(answer2);
        $("#answer3").empty().append(answer3);
        $("#quizResults").empty();
    });

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


$(document).ready(function() {
  // Modal Load
    $('#openModal').modal('show');
  // End Modal Load
  $('.carousel').carousel({
    pause: true,
    interval: false
});
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
});
