function testTakesAModelAsArgument() {

  var listDouble = {
    history: ['note2']
  }

  var listView = new ListView(listDouble);
  assert.isEq(listView.displayNotes(), "<ul><li><div> note1 </div></li></ul>");
  console.log(listView.displayNotes());
};

testTakesAModelAsArgument();
