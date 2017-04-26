window.onload = function(){
  var list = new List();
  list.createNote("This is our very first note");
  new NoteController(list);
}
