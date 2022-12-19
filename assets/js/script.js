"use strict";
// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
const modalCloseFunc = () => {
  console.log("click");
  if (!varIsEmpty(modal)) {
    modal.classList.add("closed");
  }
};
if (!varIsEmpty(modalCloseOverlay) && !varIsEmpty(modalCloseBtn)) {
  modalCloseOverlay.addEventListener("click", modalCloseFunc);
  modalCloseBtn.addEventListener("click", modalCloseFunc);
}
function varIsEmpty(v) {
  return v === undefined || v === null || v.length < 1;
}
