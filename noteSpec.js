function testNoteInstantiateWithPlaceHolder() {
  var note = new Note();
  assert.isEq(note.text, note.PLACEHOLDER);
};

testNoteInstantiateWithPlaceHolder();

function testGetText() {
  var note = new Note();
  assert.isTrue(note.getText() === note.PLACEHOLDER);
};

testGetText();
