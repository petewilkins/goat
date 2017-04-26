window.onload = function (){

  (function(exports) {

    function NoteController() {
      this.list = new List();
      this.list.createNote("Colin");
      this.list.createNote("Pete");
      this.list.createNote("JJ");
      var ourListView = new ListView(list);
    }

    NoteController.prototype.changeText = function (list) {
      var targetDiv = document.getElementById('app');
      targetDiv.innerHTML = ourListView.displayNotes();
    }

  exports.NoteController = NoteController;

  })(this);
}
