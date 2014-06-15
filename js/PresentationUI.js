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
    $('#board .space.'+bl.otherPlayer+'').fadeTo(2500, 0.0001); 
    
    if (winner === bl.player1) {
      p1 = parseInt(+$('#p1-wins').text());
      $('#p1-wins').text(p1+1);
    }
    if (winner === bl.player2) {
      p2 = parseInt(+$('#p2-wins').text());
      $('#p2-wins').text(p2+1);
    }
    
    setTimeout(function() {alert(winner+" has won the game!")},1500);

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
    $('#board .space').removeClass('player1');
    $('#board .space').removeClass('player2');
    bl.setNextTurn();
  });

  bl.setNextTurn();
})();