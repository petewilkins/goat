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
        var abbreviatedNote = historyArray[i].substring(0,20);
        listHtmlArray.push("<ul><li><a href='#" + (i + 1) + "' id='" + (i + 1) + "'> " + abbreviatedNote + " </a></li></ul>");
      }
      return listHtmlArray.join("");
    }
  }

  exports.ListView = ListView;
})(this);
