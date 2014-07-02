(function () {

  var QueryWrapper = function (elems) {
    // TODO
  };

  var myQuery = function (selector) {
    // TODO
    identifier = selector.slice(0,1)
    if (identifier === '.') {
      elems = document.getElementbyClass(selector.slice(1));
    } else if (identifier === '#') {
      elems = document.getElementbyID(selector.slice(1));
    } else {
      elems = document.getElementbyTagName(selector.slice(1));
    }

    return new QueryWrapper(elems); 
  };

  
  myQuery.each = function (array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
  };



  myQuery.version = 'beta';
  window.$ = myQuery;

})();
