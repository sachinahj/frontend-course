(function () { 
	var BusinessLogic = function () {
        this.gameOver = false;
        this.gameStart = true;
        this.secretNumber = function() {
            secret = parseInt(Math.random() * 100, 10) + 1;
            return secret
        };
        this.landMines = function(secret) {
            var array = [];
            while(array.length < 3){
                landmine = parseInt(Math.random() * 100, 10) + 1;
                if (landmine !== secret){
                    array.push(landmine);
                }
            }
            return array
        };
        this.checkNum = function(guess, actual) {
            if (!guess){
                return "nothing"
            }
            if (!this.gameOver)
                if (guess === actual){
                    this.gameOver = true;
                    return "correct";
                }
                else if (guess > actual){
                    return "high";
                }
                else {
                    return "low";
                }
            else {
                return "reset"
            }
        };

        this.checkLandMines = function(guess, landmines){
            distance = [];
            for (var i = 0; i < landmines.length; i++){
                distance.push(Math.abs(landmines[i] - guess));
            }
            return distance
        };
    }	;
    window.bl = new BusinessLogic();
})();