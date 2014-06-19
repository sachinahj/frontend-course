(function() {

  bl.updateView();

  $('#claim').on('click', function (e) {
    e.preventDefault();
    // var name = prompt("What is your name?");
    var name = $('.name-field').val().toLowerCase();
    // console.log("name", name);
    if (name === '') {
      alert('Input a name!')
      return
    }
    if (bl.doesReservationExist(name)){
      if (!bl.isReservationClaimed(name)) {
        bl.claimReservation(name)
      }
      else {
        alert("Sorry, the reservation for " + name + " has already been claimed.");
      }
    }
    else {
      alert("No reservation exist under " + name + ", please make a reservation.");
    }
    console.log("reservations", bl.reservations);
    bl.updateView();
  });

  $('#reserve').on('click', function (e) {
    e.preventDefault();
    // var name = prompt("What name should we reserve under?");
    var name = $('.name-field').val().toLowerCase();
    // console.log("name", name);
    if (name === '') {
      alert('Input a name!')
      return
    }
    if (bl.doesReservationExist(name)){
      if (!bl.isReservationClaimed(name)){
        alert(name + " already has an unclaimed reservation, please use another name.");
      }
      else {
        bl.unclaimReservation(name);
      }
    }
    else {
      bl.createReservation(name);
    }
    console.log("reservations", this.reservations);
    bl.updateView();
  });
})();