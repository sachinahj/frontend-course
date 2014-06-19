describe("BusinessLogic", function () {

  describe("doesReservationExist", function () {
    it('returns true if the reservation exists', function() {
      var name = 'billy';
      var result = bl.doesReservationExist(name);
      expect(result).toEqual(true);
    });
    it('returns false if the reservation doesn\'t exist', function() {
      var name = 'clay';
      var result = bl.doesReservationExist(name);
      expect(result).toEqual(false);
    });
  });

  describe("isReservationClaimed", function () {
    it('returns true if the reservation is claimed', function() {
      var name = 'sachin';
      var result = bl.isReservationClaimed(name);
      expect(result).toEqual(true);
    });
    it('returns false if the reservation isn\'t claimed', function() {
      var name = 'billy';
      var result = bl.isReservationClaimed(name);
      expect(result).toEqual(false);
    });
  });

  describe("claimReservation", function () {
    it('changes :claimed to true', function() {
      expect(bl.reservations['billy'].claimed).toEqual(false);
      var name = 'billy';
      var result = bl.claimReservation(name);
      expect(bl.reservations['billy'].claimed).toEqual(true);
    });
  });

  describe("unclaimReservation", function () {
    it('changes :claimed to false', function() {
      expect(bl.reservations['billy'].claimed).toEqual(true);
      var name = 'billy';
      var result = bl.unclaimReservation(name);
      expect(bl.reservations['billy'].claimed).toEqual(false);
    });
  });

  describe("createReservation", function () {
    it('changes :claimed to false', function() {
      expect(bl.reservations['sally']).not.toBeDefined();
      var name = 'sally';
      var result = bl.createReservation(name);
      expect(bl.reservations['sally']).toBeDefined();
    });
  });

});
