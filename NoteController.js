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

  var newNoteButton = document.getElementById('addnotebutton');
  newNoteButton.addEventListener("click", function(){
    console.log(document.getElementById('newnote').value);
    event.preventDefault();
  });

exports.NoteController = NoteController;

})(this);
