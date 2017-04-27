(function(exports) {

  function NoteController(list) {
    this.list = list;
    this.changeText();
    // this.makeUrlChangeLoadNoteController();
  };
  //
  // NoteController.prototype.makeUrlChangeLoadNoteController = function(){
  //   window.addEventListener("hashchange", this.showNoteForCurrentPage);
  // };
  //
  // NoteController.prototype.showNoteForCurrentPage = function(){
  //   this.showNote(this.getNoteFromUrl(window.location));
  // };
  //
  // NoteController.prototype.getNoteFromUrl = function(location){
  //   return location.hash.split("#")[1];
  // };
  //
  // NoteController.prototype.showNote = function(note){
  //   document
  //     .getElementById("app")
  //     .innerHTML = note;     // Use Element ID to return note contents
  // };

  NoteController.prototype.changeText = function () {
    var ourListView = new ListView(this.list);
    var targetDiv = document.getElementById('app');
    targetDiv.innerHTML = ourListView.displayNotes();
<<<<<<< HEAD
  }

  var newNoteButton = document.getElementById('addnotebutton');
  newNoteButton.addEventListener("click", function(){
    console.log(this.list);
    list.createNote(document.getElementById('newnote').value);
    event.preventDefault();
  });
=======
  };
>>>>>>> 001e48154cef0e96ea2c6884532a2e26c130284b

exports.NoteController = NoteController;

})(this);
