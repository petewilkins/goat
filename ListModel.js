(function(exports){

  function List(){
    this.history = [];
  }

  List.prototype.getHistory = function(){
    return this.history;
  }

  List.prototype.addNoteToHistory = function(note){
    this.history.push(note);
  }

  exports.List = List;
})(this);
