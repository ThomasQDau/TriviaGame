$("#startbut").on("click", function() {
    $("#startbut").remove();
    game.loadQuestion();
})

$(document).on("click", '.answer-button', function(e){
    game.clicked(e);
})

var questions = [{
    question: "What is 2 + 3 * 3?",
    answers: ["15", "18", "11", "10"],
    correctAnswer: "11"
}, {
    question: "Spinach is high in which mineral?",
    answers: ["Zinc", "Iron", "Sodium", "Copper"],
    correctAnswer: "Iron"
}, {
    question: "Ash's first pokemon was?",
    answers: ["Squirtle","Taylor Blanche","Ho Oh","Pikachu"],
    correctAnswer: "Pikachu"
}, {
    question: "George Washington was best known for his: ?",
    answers: ["Speeches","Military Prowess","Fortune","Slave Farm"],
    correctAnswer: "Military Prowess"
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $("#timeRem").html("Time remaining: " + game.counter + " secs!");
        if(game.counter <= 0) {
            console.log("Times up!");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#correctans").html("");
        $("#question").html(questions[game.currentQuestion].question);
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#ans1").append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
    },

    nextQuestion: function() {
        game.counter = 30;
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function () {
        clearInterval(timer);
        $("#question").html("Times up!");
        $("#ans1").empty();
        $("#correctans").html("Correct Answer was: " + questions[game.currentQuestion].correctAnswer);
        if (game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
    },
    results: function () {
        clearInterval(timer);
        $("#question").html("All done! <br>");
        $("#timeRem").html("");
        $("#correctans").html("");
        $("#question").append("Correct: " + game.correct + "<br>");
        $("#question").append("Incorrect: " + game.incorrect);
    },
    clicked: function (e) {
        clearInterval(timer);
        $("#ans1").html("");
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorr();
        } else {
            game.answeredIncorr();
        }

    },
    answeredCorr: function () {
        game.correct++;
        clearInterval(timer);
        $("#question").html("You were right!");
        if (game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }

    },
    answeredIncorr: function () {
        game.incorrect++;
        clearInterval(timer);
        $("#question").html("You were wrong!");
        $("#correctans").html("Correct Answer was: " + questions[game.currentQuestion].correctAnswer);
        if (game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
    },
    reset: function () {

    }


}