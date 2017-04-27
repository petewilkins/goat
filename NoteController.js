(function(exports) {

  function NoteController(list) {
    this.list = list;
    this.changeText();
  };

  // NoteController.prototype.makeUrlChangeLoadNoteController = function(){
  //   window.addEventListener("hashchange", showNoteForCurrentPage);
  // };

  // NoteController.prototype.showNoteForCurrentPage = function(){
  //   showNote(getNoteFromUrl(window.location));
  // };

  // NoteController.prototype.getNoteFromUrl = function(location){
  //   return location.hash.split("#")[1];
  // };

  NoteController.prototype.changeText = function () {
    var ourListView = new ListView(this.list);
    var targetDiv = document.getElementById('app');
    targetDiv.innerHTML = ourListView.displayNotes();
  };

exports.NoteController = NoteController;

})(this);
