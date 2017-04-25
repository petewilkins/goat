(function(exports) {
  function Note(text = this.PLACEHOLDER) {
    this.text = text;
  };

  Note.prototype.PLACEHOLDER = "write your note here you moron"

  Note.prototype.getText = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
