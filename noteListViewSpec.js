function testTakesAModelAsArgument() {
  var placeHolderList = ['item1']
  var listNotes = new ListNotes(placeHolderList);
  console.log(listNotes)
  assert.isEq(listNotes.displayNotes(), "<ul><li><div> item1 </div></li></ul>");
};
testTakesAModelAsArgument();
