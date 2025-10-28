const popup = document.getElementById("about_product_popup");
const closeBtn = document.querySelector(".product_popup-close");

const popupTitle = document.getElementById("popup_title");
const popupDesc = document.getElementById("popup_description");

document.querySelectorAll(".btn-info").forEach((btn) => {
  btn.addEventListener("click", () => {
    popupTitle.textContent = btn.dataset.title || "";
    popupDesc.textContent = btn.dataset.description || "";

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
