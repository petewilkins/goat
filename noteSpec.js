function testNoteInstantiateWithPlaceHolder() {
  var note = new Note();
  assert.isEq(note.text, "write your note here you moron");
};

testNoteInstantiateWithPlaceHolder();
