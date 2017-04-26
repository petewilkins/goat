console.log(2);


function testNoteControllerCanBeInstantiated () {
  var listDouble = {
    history: ['note1']
  }
  var noteController = new NoteController(listDouble)
  assert.isEq(noteController.list, listDouble)
}

testNoteControllerCanBeInstantiated();
