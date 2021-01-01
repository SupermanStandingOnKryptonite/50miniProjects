const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const i = Math.round(Math.random() * 3);

  toast.innerText = messages[i];

  toasts.appendChild(toast);
  setTimeout(() => toasts.removeChild(toast), 3000);
}
