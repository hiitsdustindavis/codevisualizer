
function Question(question, answer1, answer2, answer3, answer4) {
	this.question = question; 
	this.answer1 = answer1; 
	this.answer2 = answer2; 
	this.answer3 = answer3; 
	this.answer4 = answer4;
}

var quizArray = [[question, answer1, answer2, answer3, answer4],[question, answer1, answer2, answer3, answer4]];

Question.prototype.randomSplice = function() {
    var ri = Math.floor(Math.random() * quizArray.length);
	question = quizArray.splice[ri, 0];
	answer1 = quizArray.splice[ri, 1];
	answer2 = quizArray.splice[ri, 2];
	answer3 = quizArray.splice[ri, 3];
	answer4 = quizArray.splice[ri, 4];
}

var newQuestion = new Question(question,answer1,answer2,answer3);

var questionAsked = newQuestion.randomsplice();