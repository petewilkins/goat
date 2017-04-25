function testInitWithEmptyHistoryArray(){
  var list = new List();
  assert.isEq(list.getHistory().length, 0);
};

testInitWithEmptyHistoryArray();

function testAddingNoteIncreasesLength(){
  var list = new List();
  var note = new Note();
  list.addNoteToHistory(note);
  assert.isEq(list.getHistory().length, 1);
};

testAddingNoteIncreasesLength();

function testCanStoreNoteContentInHistory(){
  var list = new List();
  var note = new Note();
  list.addNoteToHistory(note);
  assert.isEq(list.getHistory()[0].text, note.PLACEHOLDER);
};

testCanStoreNoteContentInHistory();
