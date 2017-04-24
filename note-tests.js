function testGetText() {
  var note = new Note();
  assert.isTrue(note.getText() === "My favourite animal is the noble goat");
};

testGetText();
