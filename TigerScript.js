makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener('hashchange', showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNotefromUrl(window.location));
};

function getNotefromUrl(location) {
  return location.hash.split('#')[1];
};

function showNote(note) {
  document
    .getElementById("app")
    .innerHTML = list.history[note - 1];
};
