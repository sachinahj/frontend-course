(function(){
  var BusinessLogic = function() {
    // Using NaN instead of null is a clever hack. See checkForWinner for details.
    this.spaces = [
      NaN, NaN, NaN,
      NaN, NaN, NaN,
      NaN, NaN, NaN
    ];

    this.player1 = 'veggies';
    this.player2 = 'junkfood';
    this.currentPlayer = null;
    this.gameOver = false;

    this.setNextTurn = function () {
      if (currentPlayer === this.player1) {
        currentPlayer = this.player2;
      }
      else {
        currentPlayer = this.player1;
      }
      $('#turn-label').text(currentPlayer);
    };

    this.checkForWinner = function () {
      // Because (NaN === NaN) is always false, we can safely assume
      // that if three spaces in a row are the same, all three spaces are
      // marked by a player, and not all empty.

      if ( spaces[0] === spaces[1] && spaces[1] === spaces[2]
        || spaces[3] === spaces[4] && spaces[4] === spaces[5]
        || spaces[6] === spaces[7] && spaces[7] === spaces[8]
        // TODO: Check for rest of game winning cases
        || spaces[0] === spaces[3] && spaces[3] === spaces[6]
        || spaces[1] === spaces[4] && spaces[4] === spaces[7]
        || spaces[2] === spaces[5] && spaces[5] === spaces[8]
        || spaces[0] === spaces[4] && spaces[4] === spaces[8]
        || spaces[2] === spaces[4] && spaces[4] === spaces[6]
      )
      {
        console.log('somebody won');
        // TODO: Trigger 'game-win' event with the winning player as the event data
        $(document).trigger('game-win', currentPlayer);
      }
    };
  }
})();

$(document).on('click', '#board .space', function (e) {
  var spaceNum = $(e.currentTarget).index();
  console.log('You clicked on space #' + spaceNum);

  if (!gameOver) {
    if (!spaces[spaceNum]){
      // Marks the space with the current player's name
      // TODO: Don't mark it unless the space is blank
      spaces[spaceNum] = currentPlayer;
      // Adds a class to elem so css can take care of the visuals
      $('#board .space:eq(' + spaceNum + ')').addClass(currentPlayer);
      checkForWinner();
      setNextTurn();
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
  gameOver = true;
  alert(winner+" has won the game!");

});

// Start the game
setNextTurn();
