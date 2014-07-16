(function () {
  $(document).on('click', 'button.start', function(){
    bl.gameRestart();
    $('.start').hide();
    showQuestion();
    $('.answers').show();
    $('.submit').show();
  });

  $(document).on('click', 'button.submit', function(){
    var result = $('form').serialize();
    var yes = bl.checkAnswer(result[7]);
    if (bl.isGameOver()) {
      gameOver();
    } else {
      showQuestion();  
    }
    
  });

  function showQuestion() {
    var question = bl.getRandomQuestion();
    $("input:checked").removeAttr("checked");
    $('.question').empty().html("<h3>"+question.question+"</h3>");
    $('.answers').find('p').remove();
    $('.answers').find('.one').append("<p>"+question.choices[0]+"</p>");
    $('.answers').find('.two').append("<p>"+question.choices[1]+"</p>");
    $('.answers').find('.three').append("<p>"+question.choices[2]+"</p>");
    $('.answers').find('.four').append("<p>"+question.choices[3]+"</p>");
  }

  function gameOver() {
    var score = bl.getScore();
    $('.submit').hide();
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
    $('.start').show();
  };


})();