(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.displayNotes = function() {
    var historyArray = this.list.history
    var arrayLength = historyArray.length;
    for (var i = 0; i < arrayLength; i++) {
      return "<ul><li><div> " + historyArray[i] + " </div></li></ul>";
    }
  }

  exports.ListView = ListView;
})(this);
