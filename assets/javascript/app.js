$(document).ready(function() {
  var index = 0;
  var countdownTimer = {
    time: 30,
    reset: function() {
      this.time = 30;
      $(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
      countdownTimer.time--;
      console.log(countdownTimer.time);
      //				$('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $(".timer").html(
          "<h3>" + countdownTimer.time + " seconds remaining</h3>"
        );
      } else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };
  $("#reset").click(function() {
    document.location.reload(true);
  });
  //Questions Array with Correct Answers
  var correct = 0;
  var wrong = 0;
  var q1 = {
    question: "Who was the female lead in the movie Titanic?",
    possibleAnswers: [
      "A. Kate Middleton",
      "B. Katherine Macgregor",
      "C. Kate Winslet",
      "D. Amy Adams"
    ],
    flags: [false, false, true, false],
    answer: "C. Kate Winslet"
  };

  var q2 = {
    question: "New Orleans is known as the birthplace of what type of music?",
    possibleAnswers: ["A. Rock", "B. Jazz", "C. R&B", "D. Funk"],
    flags: [false, true, false, false],
    answer: "B. Jazz"
  };

  var q3 = {
    question:
      "What is the highest enlisted rank a soldier can hold in the United States Army?",
    possibleAnswers: [
      "A. First Sergeant",
      "B. Sergeant Major of the Army",
      "C. Private Second Class",
      "D. Command Sergeant Major"
    ],
    flags: [false, true, false, false],
    answer: "B. Sergeant Major of the Army"
  };

  var q4 = {
    question:
      "What 1985-1992 sitcom earned Emmy awards for its four stars, all women over the age of 50?",
    possibleAnswers: [
      "A. Golden Girls",
      "B. Who's The Boss",
      "C. Cheers",
      "D. Designing Women"
    ],
    flags: [true, false, false, false],
    answer: "A. Golden Girls"
  };

  var q5 = {
    question: "Who was the lead singer of the rock band Queen?",
    possibleAnswers: [
      "A. Brian May",
      "B. Freddie Mercury",
      "C. Roger Taylor",
      "D. John Deacon"
    ],
    flags: [false, true, false, false],
    answer: "B. Freddie Mercury"
  };

  var q6 = {
    question: "Jason Voorhees is the main antagonist in what movie franchise?",
    possibleAnswers: [
      "A. Friday the 13th",
      "B. Bundy",
      "C. Children of the Corn",
      "D. Old Habits Die Hard"
    ],
    flags: [true, false, false, false],
    answer: "A. Friday the 13th"
  };

  var q7 = {
    question: "What city is the capital of the country Turkey?",
    possibleAnswers: ["A. Instanbul", "B. Konya", "C. Ankara", "D. Izmir"],
    flags: [false, false, true, false],
    answer: "C. Ankara"
  };

  var q8 = {
    question: "What animal has the largest ears?",
    possibleAnswers: [
      "A. Giraffe",
      "B. Elephant",
      "C. Rabbit",
      "D. Basset Hound"
    ],
    flags: [false, true, false, false],
    answer: "B. Elephant"
  };

  var q9 = {
    question: "What is the world’s largest active volcano?",
    possibleAnswers: [
      "A. Sakurajima, Japan",
      "B. Yellowstone Caldera, Wyoming",
      "C. Grímsvötn, Iceland",
      "D. Mauna Loa (Hawaii)"
    ],
    flags: [false, false, false, true],
    answer: "D. Mauna Loa (Hawaii)"
  };

  var q10 = {
    question:
      "Which wartime activity did the Walt Disney Studios partake in to support the American war effort?",
    possibleAnswers: [
      "A. Recycling used film footage",
      "B. Designing US Army & US Navy insignia",
      "C. Hosted a Studio Victory Garden where employees grew food for their families",
      "D. Forced employees to carpool by closing parking lots to non-carpool cars"
    ],
    flags: [false, true, false, false],
    answer: "B. Designing US Army & US Navy insignia"
  };

  var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

  function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $(".question").html(
      "<h3>" + questionArray[questionSelection].question + "</h3>"
    );
    $("#buttonA")
      .text(questionArray[questionSelection].possibleAnswers[0])
      .show();
    $("#buttonB")
      .text(questionArray[questionSelection].possibleAnswers[1])
      .show();
    $("#buttonC")
      .text(questionArray[questionSelection].possibleAnswers[2])
      .show();
    $("#buttonD")
      .text(questionArray[questionSelection].possibleAnswers[3])
      .show();
    //  getAnswer();
    //  nextQuestion(index);
  }

  //function nextQuestion() {
  //	index = index++;
  //	console.log(index);
  //}

  function setup() {
    index = 0;
    $(".question").append('<button id="startButton">Start</button>');
    $("#startButton").on("click", function() {
      $(this).hide();
      countdownTimer.start();
      loadQuestion(index);
    });
  }

  function getAnswer() {
    //  nextQuestion();
    $(".answerchoice").on("click", function() {
      console.log("alert", index);
      index++;
      console.log("click", index);
      $(".question").text("");
      $("#buttonA").text("");
      $("#buttonB").text("");
      $("#buttonC").text("");
      $("#buttonD").text("");
      loadQuestion();
    });
  }

  function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
  }

  function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
  }

  function showScore() {
    $(".question").empty();
    $(".question").append("<h2><p>" + correct + " correct</p></h2>");
    $(".question").append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $(".timer").empty();
  }
  //		for (var i=0; i<questionArray.length; i++) {
  //			$('.question').append('<p>'+questionArray[i].question+'</p>');
  //			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
  //				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
  //			}
  //			$('#possibleAnswers').on('click', function() {

  //		console.log("click");
  //		countdownTimer.start();
  //		for (var i = 0; i < questionArray.length; i++) {
  //			console.log(i);

  //			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
  //			$('.question').html(questionArray[i].question);
  //			while (countdownTimer != 0) {

  //			}

  //	});
  //	$('#startButton').click(countdownTimer.start);

  //}
  setup();
  $(".answerchoice").on("click", function() {
    console.log($(this));
    if (this.id == "buttonA") {
      var answerChosen = "A";
    } else if (this.id == "buttonB") {
      answerChosen = "B";
    } else if (this.id == "buttonC") {
      answerChosen = "C";
    } else if (this.id == "buttonD") {
      answerChosen = "D";
    }
    if (answerChosen == "A" && questionArray[index].flags[0] == true) {
      answerCorrect();
    } else if (answerChosen == "A") {
      answerWrong();
    }
    if (answerChosen == "B" && questionArray[index].flags[1] == true) {
      answerCorrect();
    } else if (answerChosen == "B") {
      answerWrong();
    }
    if (answerChosen == "C" && questionArray[index].flags[2] == true) {
      answerCorrect();
    } else if (answerChosen == "C") {
      answerWrong();
    }
    if (answerChosen == "D" && questionArray[index].flags[3] == true) {
      answerCorrect();
    } else if (answerChosen == "D") {
      answerWrong();
    }

    $(".question").text("");
    $("#buttonA").text("");
    $("#buttonB").text("");
    $("#buttonC").text("");
    $("#buttonD").text("");
    index++;
    if (index < questionArray.length) {
      loadQuestion(index);
    } else {
      $(".answerchoice").hide();
      showScore();
    }
  });

  //	$('#start').click(countdownTimer.start);
});
