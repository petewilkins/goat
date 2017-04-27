function testTakesAModelAsArgument() {

  var listDouble = {
    history: ['note1']
  }

  var listView = new ListView(listDouble);
  assert.isEq(listView.displayNotes(), "<ul><li><a href='#1' id='1'> note1 </a></li></ul>");

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
  assert.isEq(listView.displayNotes(), "<ul><li><a href='#1' id='1'> note1 </a></li></ul>" + "<ul><li><a href='#2' id='2'> note2 </a></li></ul>" + "<ul><li><a href='#3' id='3'> note3 </a></li></ul>")
};
testTakesAModelAsArgument();
testTakesModelWithAnEmptyArrayAsArgument();
testTakesModelWithMultipleNotesAsArgument();
