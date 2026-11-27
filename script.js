for (const button of document.querySelectorAll("button[data-dialog]")) {
  const dialog = document.getElementById(button.dataset.dialog);
  if (!dialog || typeof dialog.showModal !== "function") continue;

  button.hidden = false;
  button.addEventListener("click", () => dialog.showModal());
}
