(function(exports) {

  function NoteController(list) {
    this.list = list;
    this.changeText();
  }

  NoteController.prototype.changeText = function () {
    var ourListView = new ListView(this.list);
    var targetDiv = document.getElementById('app');
    targetDiv.innerHTML = ourListView.displayNotes();
  }


exports.NoteController = NoteController;

})(this);
