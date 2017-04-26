function testSingleNoteView() {
  var noteDouble = {
    text: "Favourite drink: seltzer"
  }
  var singleNote = new SingleNoteView(noteDouble);

  assert.isEq(singleNote.showNote(), "<div>Favourite drink: seltzer</div>");

};

testSingleNoteView();
