window.onload = function (){

  function changeText() {
    var targetDiv = document.getElementById('notes');
    var list = new List();
    list.createNote('monkey fingers');
    list.createNote('hippo tails');
    var listView = new ListView(list);

    targetDiv.innerHTML = listView.displayNotes();
  }

  changeText();
}
