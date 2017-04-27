function testNoteControllerCanBeInstantiated () {
  assert.isTrue(this.NoteController)
}

testNoteControllerCanBeInstantiated();

function testAppElementContainsCorrectHTML(){
  listdouble = {
    history: ['note1', 'note2', 'note3']
  }

  var testDiv = document.getElementById('app');
  new NoteController(listdouble);
  assert.isEq(testDiv.innerHTML, '<ul><li><a href="#1" id="1"> note1 </a></li></ul><ul><li><a href="#2" id="2"> note2 </a></li></ul><ul><li><a href="#3" id="3"> note3 </a></li></ul>')
}

testAppElementContainsCorrectHTML();

<<<<<<< HEAD
// DO NOT DELETE THIS COMMENT (this test works and should be added to a separate test-file later):

// function testNoteFormOutput() {
//   var textArea = document.getElementById("newnote")
//   textArea.textContent = "this is a test";
//   document.getElementById("addnotebutton").click();
//   var textResult = document.getElementById("newnote").value
//
//   assert.isEq(textArea.textContent, textResult);
//
// }
//
// testNoteFormOutput();
=======
function testNoteLinkedToCorrectUrl(){
  listdouble = {
    history: ['note1', 'note2', 'note3']
  }

  new NoteController(listdouble);
  document.getElementById("2").click();
  assert.isEq(window.location.href.split("#")[1], "2")
}

testNoteLinkedToCorrectUrl();

function testLoadsCorrectContent(){
  listdouble = {
    history: ['note1', 'note2', 'note3']
  }

  var testDiv = document.getElementById('app');
  new NoteController(listdouble);
  document.getElementById("2").click();
  assert.isEq(testDiv.innerHTML, 'note2');

}

testLoadsCorrectContent();
>>>>>>> 001e48154cef0e96ea2c6884532a2e26c130284b
