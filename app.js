const sideBarToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");


sideBarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
})

close.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
})