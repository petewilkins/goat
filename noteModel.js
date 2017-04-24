(function(exports) {
  function Note() {
    this.text = this.PLACEHOLDER;
  };

  Note.prototype.PLACEHOLDER = "write your note here you moron"

  Note.prototype.getText = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
