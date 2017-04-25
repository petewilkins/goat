function testTakesAModelAsArgument() {
  var list = new List();

  list.createNote("hi");
  var listView = new ListView(list);
  assert.isEq(listView.displayNotes(), "<ul><li><div> hi </div></li></ul>");
};

testTakesAModelAsArgument();
