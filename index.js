window.onload = function(){
  var list = new List();
  list.createNote("This is our very first note");
  list.createNote("This is our very second note");
  list.createNote("This is our very third note");
  new NoteController(list);
}
