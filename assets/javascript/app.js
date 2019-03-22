$("#startbut").on("click", function() {
    $("#startbut").remove();
    game.loadQuestion();
})

var questions = [{
    question: "Who is Thomas?",
    answers: ["Thomas", "Kevin", "John", "Maple"],
    correctAnswer: "Thomas"
}, {
    question: "What is my favorite game?",
    answers: ["DotA", "Maplestory", "League of Legends", "Apex Legend"],
    correctAnswer: "League of Legends"
}, {
    question: "",
    answers: ["","","",""],
    correctAnswer: ""
}, {
    question: "",
    answers: ["","","",""],
    correctAnswer: ""
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $("timeRem").html(game.counter);
        if(game.counter <= 0) {
            console.log("Times up!");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#question").html(questions[game.currentQuestion].question);
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#ans1").append('<button class="answer-button" id="button-'+i+'" data-name"'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }

    },
    timeUp: function () {

    },
    results: function () {

    },
    clicked: function () {

    },
    answeredCorr: function () {

    },
    answeredIncorr: function () {

    },
    reset: function () {

    }


}