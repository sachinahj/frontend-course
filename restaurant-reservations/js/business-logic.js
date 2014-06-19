(function() {
  var BusinessLogic = function() {
    this.reservations = {
      'billy': { claimed: false },
      'sachin': { claimed: true }
    };
    this.doesReservationExist = function (name) {
      if (this.reservations[name]) {return true}
        else {return false}
    };
    this.isReservationClaimed = function (name) {
      if(this.reservations[name].claimed === true) {return true}
        else {return false}
    };
    this.claimReservation = function (name) {
      this.reservations[name].claimed = true;
    };
    this.unclaimReservation = function (name){
      this.reservations[name].claimed = false; 
    };
    this.createReservation = function (name){
      this.reservations[name] = {claimed: false};
    };
    this.updateView = function () {
      $('.people').find('p').remove();
      for (var i in this.reservations) {
        console.log('Key is: ' + i + '. Value is: ' + this.reservations[i].claimed);
        if (this.reservations[i].claimed === false) {$('.reservations').append('<p>'+i+'</p>')}
          else {$('.claimed').append('<p>'+i+'</p>')}
      }
    };
  };
  window.bl = new BusinessLogic();
})();