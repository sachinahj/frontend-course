(function () {

  $(document).ready(function(){
    bl.getStorage();
    populateLeaderboard();
  });

  $(document).on('click', 'button.start', function(){
    bl.gameRestart();
    $('.start').hide();
    $('.leaderboard').hide();
    showQuestion();
    $('.answers').show();
    $('.submit.success').show();
  });

  $(document).on('click', 'button.submit.success', function(){
    var result = $('form').serialize();
    var yes = bl.checkAnswer(result[7]);
    if (bl.isGameOver()) {
      gameOver();
    } else {
      showQuestion();  
    }
  });

  $(document).on('click', 'button.submit.alert', function () {
    username = $('.user').val();
    bl.addToLeaderboard(username);
    $('.question').empty();
    $('.user').val("");
    $('.highscore').hide();

    $('.start').show();
    $('.leaderboard').show();
    populateLeaderboard();
  });

  function showQuestion() {
    var question = bl.getRandomQuestion();
    $("input:checked").removeAttr("checked");
    $('.question').empty().append("<h6>(This question has been answered  correctly "+question.correct+"/"+question.asked+" times)</h6>").append("<h3>"+question.question+"</h3>");
    $('.answers').find('p').remove();
    $('.answers').find('.one').append("<p>"+question.choices[0]+"</p>");
    $('.answers').find('.two').append("<p>"+question.choices[1]+"</p>");
    $('.answers').find('.three').append("<p>"+question.choices[2]+"</p>");
    $('.answers').find('.four').append("<p>"+question.choices[3]+"</p>");
  }

  function gameOver() {
    var score = bl.getScore();
    $('.submit.success').hide();
    $('.answers').hide();
    $('.question').empty().html("<h3>Score: "+score+"/10</h3");
    if (score === 10) {
      $('.question').append("<h4>You are a basketball god</h4>")
    } else if (score > 8) {
      $('.question').append("<h4>You're like basketball jesus</h4>")
    } else if (score >= 5) {
      $('.question').append("<h4>Not bad but you can do better</h4>")
    } else {
      $('.question').append("<h4>Damn.....not even 50%</h4>")
    }
    $('.highscore').show();
  }

  function populateLeaderboard () {
    leaderboard_array = bl.getLeaderboard();
    if (leaderboard_array.length === 0) {
      $('.leaderboard').empty();
    } else {
      $('.leaderboard').empty().append("<h4>Leaderboard</h4>")
      $.each(leaderboard_array, function (index, item) {
        $('.leaderboard').append("<p>"+item[1]+" --> "+item[0]+"</p><br>")
      });
    }
  }




})();