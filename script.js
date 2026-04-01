function openWhatsApp() {
  window.open("https://wa.me/919000000000", "_blank");
}
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("toggle-btn")) return;

  const card = e.target.closest(".surgery-card");

  document.querySelectorAll(".surgery-card").forEach(c => {
    if (c !== card) {
      c.classList.remove("active");
      const btn = c.querySelector(".toggle-btn");
      if (btn) btn.textContent = "View Details";
    }
  });

  const isOpen = card.classList.contains("active");
  card.classList.toggle("active");
  e.target.textContent = isOpen ? "View Details" : "Hide Details";
});
