function testTakesAModelAsArgument() {

  var listDouble = {
    history: ['note1']
  }

  var listView = new ListView(listDouble);
  assert.isEq(listView.displayNotes(), "<ul><li><div id='1'> note1 </div></li></ul>");

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

  var listView = new ListView(listDoubleMultiple);
  assert.isEq(listView.displayNotes(), "<ul><li><div id='1'> note1 </div></li></ul>" + "<ul><li><div id='2'> note2 </div></li></ul>" + "<ul><li><div id='3'> note3 </div></li></ul>")
};

function testAbbreviation() {

  var listDoubleWithNoteOver20 = {
    history: ['this is a long note with over 20 characters']
  }

  var listView = new ListView(listDoubleWithNoteOver20);
  assert.isEq(listView.displayNotes(), "<ul><li><div id='1'> this is a long note  </div></li></ul>");
}

testTakesAModelAsArgument();
testTakesModelWithAnEmptyArrayAsArgument();
testTakesModelWithMultipleNotesAsArgument();
testAbbreviation();
