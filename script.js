let menu = document.querySelector(".menu-btn");

menu.addEventListener("click", (e) => {
  if(e.target == menu.querySelector("i"))
  menu.classList.toggle("active");
});
