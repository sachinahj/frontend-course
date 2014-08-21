(function () {
  var BusinessLogic = function () {
    var all_questions = [
      {
        id: 1,
        question: "To acquire the ball after a missed shot is called a _________",
        choices: ["lay up","foul","free throw","rebound"],
        answer: 4,
        correct: 0,
        asked: 0
      },
      {
        id: 2,
        question: "How many points is a basket worth if shot from inside of the 3-point line?",
        choices: ["1","2","3","4"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 3,
        question: "A _________ violation is called when a player moves more than two steps without dribbling the basketball.",
        choices: ["running","traveling","palming","body contact"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 4,
        question: "Basketball was created by a man named:",
        choices: ["Jon Quincy","Brad Johnson","Homer Basketball","James Naismith"],
        answer: 4,
        correct: 0,
        asked: 0
      },
      {
        id: 5,
        question: "Which shot has the highest percentage of going in the basket?",
        choices: ["3 point shot","lay-up","fade away","free throw"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 6,
        question: "A _________ occurs when a player breaks the rules in a way that does not involve contact.",
        choices: ["foul","violation","block","rebound"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 7,
        question: " Personal contact against the body of an opponent by a player with the ball is called:",
        choices: ["fast break","charging","traveling","zone"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 8,
        question: "A free throw is worth how many points?",
        choices: ["2","3","4","1"],
        answer: 4,
        correct: 0,
        asked: 0
      },
      {
        id: 9,
        question: "In basketball a ______________ occurs when a player stops her dribble and then resumes it.",
        choices: ["rebound","double dribble","held ball","travel"],
        answer: 2,
        correct: 0,
        asked: 0
      },
      {
        id: 10,
        question: "What is the maximum number of fouls that an NBA player can have before you foul out of a game?",
        choices: ["5","4","3","6"],
        answer: 1,
        correct: 0,
        asked: 0
      }
    ];
    var asked = [];
    var score = 0;
    var lastQuestionIndex = -1;
    var leaderboard = [];

    this.getRandomQuestion = function () {
      if (asked.length === all_questions.length) {
        return false;
      }
      var check = 0;
      while (check !== -1) {
        var random = Math.floor((Math.random() * 10) + 0);
        check = $.inArray(random, asked);
        if (check === -1) {
          asked.push(random);
          question = all_questions[random];
          lastQuestionIndex = random;
          return question;
        }
      }
    };
    this.checkAnswer = function (answer) {
      all_questions[lastQuestionIndex].asked++;
      if (answer == (all_questions[lastQuestionIndex].answer - 1)){
        score += 1;
        all_questions[lastQuestionIndex].correct++;
        return true;
      }
      return false;
    };
    this.getScore = function () {
      return score;
    }
    this.isGameOver = function () {
      if (asked.length === all_questions.length) {
        return true;
      }
      return false;
    };
    this.gameRestart = function (){
      asked = [];
      lastAnswer = -1;
      score = 0
    };
    this.addToLeaderboard = function (username) {
      leaderboard.push([score, username]);
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
      localStorage.setItem('questions', JSON.stringify(all_questions));
      return true;
    };
    this.getLeaderboard = function() {
      function Comparator(a,b){
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        return 0;
      }
      ordered_leaderboard = leaderboard.sort(Comparator);

      return ordered_leaderboard;
    };
    this.getStorage = function() {
      storage = localStorage.getItem('leaderboard');
      storage = JSON.parse(storage);
      if (storage !== null) {
        leaderboard = storage;
      }
      storage = localStorage.getItem('questions');
      storage = JSON.parse(storage);
      if (storage !== null) {
        all_questions = storage;
      }
    };
  };



  window.bl = new BusinessLogic();

})();


