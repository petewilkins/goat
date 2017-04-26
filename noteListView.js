(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.displayNotes = function() {
    var historyArray = this.list.history
    var arrayLength = historyArray.length;
    var listHtmlArray = []
    if (arrayLength === 0) {
      return "You have no note love.";
    } else {
      for (var i = 0; i < arrayLength; i++) {
        listHtmlArray.push("<ul><li><div id='" + (i + 1) + "'> " + historyArray[i] + " </div></li></ul>");
      }
      return listHtmlArray.join("");
    }
  }

  exports.ListView = ListView;
})(this);
