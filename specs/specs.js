
describe('quizConstructor', function() {
  it("It creates a new object with the passed arguments.", function() {
    var testQuiz = new quizConstructor(this.question, this.answer1, this.answer2, this.answer3);
    expect(testQuiz.question).to.equal(this.question);
    expect(testQuiz.answer2).to.equal(this.answer1);
    expect(testQuiz.answer1).to.equal(this.answer2);
    expect(testQuiz.answer3).to.equal(this.answer3);
  });
  
  it("Checks to see what argument is at index 0 in the array.", function() {
  	var quiz = new Array();
    quiz[0] = new quizConstructor("this.question", "this.answer1", "this.answer2", "this.answer3")
    expect(quiz[0].question).to.equal("this.question");
  });
});
