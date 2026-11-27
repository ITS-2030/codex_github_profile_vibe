const projects = [...document.querySelectorAll(".project-card")];
const filters = document.querySelector(".filters");
const filterButtons = [...filters.querySelectorAll("button")];
const filterStatus = document.querySelector("#filter-status");

filters.hidden = false;
filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected || selected.getAttribute("aria-pressed") === "true") return;

  const category = selected.dataset.filter;
  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button === selected));
  }

  let visibleCount = 0;
  for (const project of projects) {
    project.hidden = category !== "all" && project.dataset.category !== category;
    if (!project.hidden) visibleCount += 1;
  }
  filterStatus.textContent = `프로젝트 ${visibleCount}개 표시 중`;
});

for (const button of document.querySelectorAll("button[data-dialog]")) {
  const dialog = document.getElementById(button.dataset.dialog);
  if (!dialog || typeof dialog.showModal !== "function") continue;

  button.hidden = false;
  button.addEventListener("click", () => dialog.showModal());
}

const contact = document.querySelector("#contact");
const email = contact.dataset.email.trim();
const github = contact.dataset.github.trim();
const emailLink = contact.querySelector("[data-email-link]");
const githubLink = contact.querySelector("[data-github-link]");

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  emailLink.href = `mailto:${encodeURIComponent(email).replace("%40", "@")}`;
  emailLink.hidden = false;
}

if (/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(github)) {
  githubLink.href = `https://github.com/${github}`;
  githubLink.hidden = false;
}

if (!emailLink.hidden || !githubLink.hidden) {
  contact.querySelector("[data-contact-placeholder]").hidden = true;
}
