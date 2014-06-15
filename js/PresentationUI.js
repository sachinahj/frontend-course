(function() {
  $(document).on('click', '#board .space', function (e) {
    spaceNum = $(e.currentTarget).index();
    console.log('You clicked on space #' + spaceNum);

    if (!bl.gameOver) {
      if (!bl.spaces[spaceNum]){
        // Marks the space with the current player's name
        // TODO: Don't mark it unless the space is blank
        bl.spaces[spaceNum] = bl.currentPlayer;
        // Adds a class to elem so css can take care of the visuals
        $('#board .space:eq(' + spaceNum + ')').addClass(bl.currentPlayer);
        bl.checkForWinner();
        bl.setNextTurn();
      }
      else {
        alert("Spot already taken");
      }
    }
    else {
      alert("Game is over, Refresh the browswer to play a new game");
    }

  });

  $(document).on('game-win', function (e, winner) {
    // TODO: Alert who won the game
    bl.gameOver = true;

    $(document).trigger('animation', winner);
    
    if (winner === bl.player1) {
      p1 = parseInt(+$('#p1-wins').text());
      $('#p1-wins').text(p1+1);
    }
    if (winner === bl.player2) {
      p2 = parseInt(+$('#p2-wins').text());
      $('#p2-wins').text(p2+1);
    }

    alert(winner+" has won the game!");
  });

  $('#restart-button').on('click', function (e) {
    console.log("i resetted!");
    bl.gameOver = false;
    bl.currentPlayer = null;
    bl.spaces = [
      NaN, NaN, NaN,
      NaN, NaN, NaN,
      NaN, NaN, NaN
    ];
    for (var i = 0; i <= 8; i++) {
        $('#board .space:eq('+i+')').fadeTo(0.1, 1); 
    }
    $('#board .space').removeClass('veggies');
    $('#board .space').removeClass('junkfood');
    bl.setNextTurn();
  });

  $(document).on('animation', function (e, winner) {
    for (var i = 0; i <= 8; i++) {
      console.log("i", $('#board .space:eq('+i+')').hasClass(winner));
      if ($('#board .space:eq('+i+')').hasClass(winner)){
        $('#board .space:eq('+i+')').fadeTo(5000, 1);
      }
      else {
        $('#board .space:eq('+i+')').fadeTo(5000, 0.0001); 
      }
    }
  });

  bl.setNextTurn();
})();