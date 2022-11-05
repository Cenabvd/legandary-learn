const open = document.querySelector(".hamburger-icon");
const close = document.querySelector(".icon-close");
const sidebar = document.querySelector(".sidebar");

open.addEventListener('click', () => {
  sidebar.classList.toggle('translate-x-0');
});

close.addEventListener('click', () => {
  sidebar.classList.toggle('translate-x-0');
});

