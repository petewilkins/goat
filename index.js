window.onload = function(){
  var list = new List();
  list.createNote("This is our very first note");
  noteController = new NoteController(list);
}
