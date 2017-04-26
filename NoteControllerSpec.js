function testNoteControllerCanBeInstantiated () {
  assert.isTrue(this.NoteController)
}

testNoteControllerCanBeInstantiated();

function testAppElementContainsCorrectHTML(){
  listdouble = {
    history: ['note1', 'note2', 'note3']
  }

  var testDiv = document.getElementById('app');
  var listView = new ListView(listdouble);

  new NoteController(listdouble);

  assert.isEq(testDiv.innerHTML, '<ul><li><div id="1"> note1 </div></li></ul><ul><li><div id="2"> note2 </div></li></ul><ul><li><div id="3"> note3 </div></li></ul>')
}

testAppElementContainsCorrectHTML();

