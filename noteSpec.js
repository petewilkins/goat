function testNoteInstantiateWithPlaceHolder() {
  var note = new Note();
  assert.isEq(note.text, note.PLACEHOLDER);
};

testNoteInstantiateWithPlaceHolder();
