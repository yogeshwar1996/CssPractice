var backdrop = document.querySelector(".back-drop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons?.length; i++) {
  selectPlanButtons[i]?.addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "none";
    backdrop?.classList.add("open");
    modal?.classList.add("open");
  });
}

backdrop?.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav?.classList.remove("open");
  closeModal();
});
modalNoButton?.addEventListener("click", closeModal);

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop?.classList.remove("open");
  modal?.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav?.classList.add("open");
  backdrop?.classList.add("open");
});
