(function(exports) {
  function Note() {
    this.text = "My favourite animal is the noble goat";
  };

  Note.prototype.getText = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
