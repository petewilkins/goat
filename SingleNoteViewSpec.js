function testSingleNoteView() {
  var listDouble = {
    history: ['note1', 'note2', 'note3'];
  }

  var listView = new ListView(listDouble);
  assert.isEq(SingleNoteView.view(note1), "<div>Favourite drink: seltzer</div>")

};
