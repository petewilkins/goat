window.onload = function(){
  var list = new List();
  list.createNote("Igloo");
  list.createNote("Forrest");
  list.createNote("Gump");
  new NoteController(list);
}
