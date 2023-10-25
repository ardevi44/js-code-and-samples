export function assignH1Text(lectureTitle) {
  document.querySelector("h1").textContent = lectureTitle;
}

export function assignDocTitle(lectureTitle) {
  document.title = lectureTitle;
}

export function assignDocTitleAndH1(lectureName) {
  assignDocTitle(lectureName);
  assignH1Text(lectureName);
}
