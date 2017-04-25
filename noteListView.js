
(function(exports) {

  function ListNotes(list) {

    ListNotes.prototype.displayNotes = function() {
      var arrayLength = list.length;
      for (var i = 0; i < arrayLength; i++) {
        console.log("<ul><li><div> " + list[i] + " </div></li></ul>");
      }
    }
  }

  exports.ListNotes = ListNotes;
})(this);
