(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.displayNotes = function() {
    var historyArray = this.list.history
    var arrayLength = historyArray.length;
    var string = []
    if (arrayLength === 0) {
      return "You have no note love.";
    } else {
      for (var i = 0; i < arrayLength; i++) {
        string.push("<ul><li><div> " + historyArray[i] + " </div></li></ul>");
      }
      return string.join();
    }
  }

  exports.ListView = ListView;
})(this);
