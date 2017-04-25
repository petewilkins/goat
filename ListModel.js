(function(exports){

  function List(){
    this.history = [];
  }

  List.prototype.getHistory = function(){
    return this.history;
  }

  List.prototype.createNote = function(text){
    var note = new Note(text);
    this.history.push(note.text);
  }


  exports.List = List;
})(this);
