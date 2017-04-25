function testInitWithEmptyHistoryArray(){
  var list = new List();
  assert.isEq(list.getHistory().length, 0);
};

testInitWithEmptyHistoryArray();

function testAddingNoteIncreasesLength(){
  var list = new List();
  list.createNote();
  assert.isEq(list.getHistory().length, 1);
};

testAddingNoteIncreasesLength();

function testCanStoreNoteContentInHistory(){
  var list = new List();
  var input = 'monkey fingers';
  list.createNote(input);
  assert.isEq(list.getHistory()[0], input);
};

testCanStoreNoteContentInHistory();
