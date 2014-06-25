(function () {

  window.Person = function (name) {
    this.name = name;
    this.hasDriversLicense = false;
    this.receiveLicense = function () {
      this.hasDriversLicense = true;
    };
  };

})();