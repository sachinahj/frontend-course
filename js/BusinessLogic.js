(function(){
  var BusinessLogic = function() {
    // Using NaN instead of null is a clever hack. See checkForWinner for details.
    this.spaces = [
      NaN, NaN, NaN,
      NaN, NaN, NaN,
      NaN, NaN, NaN
    ];

    this.player1 = 'player1';
    this.player2 = 'player2';
    this.currentPlayer = null;
    this.gameOver = false;

    this.setNextTurn = function () {
      if (this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      }
      else {
        this.currentPlayer = this.player1;
      }
      $('#turn-label').text(this.currentPlayer);
    };

    this.checkForWinner = function () {
      // Because (NaN === NaN) is always false, we can safely assume
      // that if three spaces in a row are the same, all three spaces are
      // marked by a player, and not all empty.

      if ( this.spaces[0] === this.spaces[1] && this.spaces[1] === this.spaces[2]
        || this.spaces[3] === this.spaces[4] && this.spaces[4] === this.spaces[5]
        || this.spaces[6] === this.spaces[7] && this.spaces[7] === this.spaces[8]
        // TODO: Check for rest of game winning cases
        || this.spaces[0] === this.spaces[3] && this.spaces[3] === this.spaces[6]
        || this.spaces[1] === this.spaces[4] && this.spaces[4] === this.spaces[7]
        || this.spaces[2] === this.spaces[5] && this.spaces[5] === this.spaces[8]
        || this.spaces[0] === this.spaces[4] && this.spaces[4] === this.spaces[8]
        || this.spaces[2] === this.spaces[4] && this.spaces[4] === this.spaces[6]
      )
      {
        console.log('somebody won');
        // TODO: Trigger 'game-win' event with the winning player as the event data
        $(document).trigger('game-win', this.currentPlayer);
      }
    };
  };
  window.bl = new BusinessLogic;
})();