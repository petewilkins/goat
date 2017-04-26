function testTakesAModelAsArgument() {

  var listDouble = {
    history: ['note1']
  }

  var listView = new ListView(listDouble);
  assert.isEq(listView.displayNotes(), "<ul><li><div> note1 </div></li></ul>");

};

function testTakesModelWithAnEmptyArrayAsArgument() {

  var listDoubleEmpty = {
    history: []
  }

  var listView = new ListView(listDoubleEmpty);
  assert.isEq(listView.displayNotes(), "You have no note love.")

};

function testTakesModelWithMultipleNotesAsArgument() {

  var listDoubleMultiple = {
    history: ['note1', 'note2', 'note3']
  }

  var listView = new ListView(listDoubleMultiple)
  assert.isEq(listView.displayNotes(), "<ul><li><div> note1 </div></li></ul>" + "," + "<ul><li><div> note2 </div></li></ul>" + "," + "<ul><li><div> note3 </div></li></ul>")
};
testTakesAModelAsArgument();
testTakesModelWithAnEmptyArrayAsArgument();
testTakesModelWithMultipleNotesAsArgument();
