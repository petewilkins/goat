(function(exports){

  window.onload = function (){

    function NoteController(list){
      this.list = list;
    }

    NoteController.prototype.changeText = function(){
      var targetDiv = document.getElementById('app');
      var listView = new ListView(list);
      targetDiv.innerHTML = listView.displayNotes();
    }

    this.changeText;

    exports.NoteController = NoteController;

  }

})(this);

