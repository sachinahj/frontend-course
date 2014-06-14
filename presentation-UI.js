(function(){
    var output = function(data) {
        if (data === 'nothing'){
            $('#response').text('Enter something');
            return
        }
        if (data === 'correct'){
            $('#response').text('You got it!');
        }
        else if (data === 'high'){
            $('#response').text('You guessed high. Guess lower.');
        }
        else if (data === 'low'){
            $('#response').text('You guessed low. Guess higher.');
        }
        else{
            $('#response').text('I dont know what happened');
        }
    };

    var landMineColor = function(mindistance){
        if (mindistance === 1){
            console.log("YOUR IN THE LANDMINE color function")
            $('#landmine').css("background-color", "red");
        }
        else if (mindistance >= 2 && mindistance <= 5)
        {
            $('#landmine').css("background-color", "yellow");   
        }
        else {
            $('#landmine').css("background-color", "grey");
        }

    };

    var game = function() {
        if (bl.gameStart) {
          secret = bl.secretNumber();
            console.log("Secret number is: " + secret);
          landmines = bl.landMines(secret);
            console.log("landmines", landmines);
          bl.gameStart = false;
        }
        if (!bl.gameOver){
            var guess = +$('#user-input').val();
            console.log("guess", guess);
            answer = bl.checkNum(guess, secret);
                console.log("answer", answer)

            distances = bl.checkLandMines(guess, landmines);
                console.log("distances", distances)

            mindistance = Math.min.apply(Math, distances)

            if (mindistance === 0){
                bl.gameOver = true;
                $('#response').text('You guessed the landmine!');
                $('#landmine').text("");
            } 
            else {
                
                output(answer)
                response = $('#response').text();


                    console.log(response)
                if (response === "Enter something"){
                    $('#landmine').text("");
                    landMineColor(mindistance)
                }  
                else {
                    $('#landmine').text("Mine is "+mindistance+" spots away!");
                    landMineColor(mindistance)
                }
            }
        }
        else {
            $('#response').text('Reset the game');
        }
    };
    $('#submit-button').on('click', function(e){
        e.preventDefault();
        game();
        
    });
    $('#reset-button').on('click', function(e){
        e.preventDefault();
        $('#user-input').val("");
        $('#landmine').val("");
        $('#response').val("");

        bl.gameStart = true;
        bl.gameOver = false;
        game();
    });

})();