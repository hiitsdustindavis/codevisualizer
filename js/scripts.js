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
    quiz[0] = new quizConstructor("Prototypes are which?: ","A model of your website","A property whose value is a function","Objects from which other objects inherit");
    quiz[1] = new quizConstructor("Booleans, numbers, and strings are: ","Always objects in JavaScript.","Sometimes objects.","Never objects.");
    quiz[2] = new quizConstructor("Loops are used for: ","looping through a block of code a number of times.","looping your JavaScript together with your HTML.","Looping through your specs.");
    quiz[3] = new quizConstructor("The code responsible for handling the evaluation and manipulation of data is: ","UI Logic","Business Logic","Inductive Logic");
    quiz[4] = new quizConstructor("A function that can be invoked using a new keyword to create new objects is: ","a Constructor.","a Creator.", "a Variable.");
    quiz[5] = new quizConstructor("A variable declared outside a function is: ","Local, only usable with one function.", "Global, usable with all functions.", "Literal.");
    quiz[6] = new quizConstructor("In JavaScript, a block of code designed to perform a particular task is a: ","Parameter.","Argument.","Variable.","Function.");


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
});
