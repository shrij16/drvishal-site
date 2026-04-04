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
// Add this right after the last '});' in your screenshot:
    
    // Toggle the clicked card
    card.classList.toggle("active");

    // Update the button text for the clicked card
    if (card.classList.contains("active")) {
      e.target.textContent = "Hide Details";
    } else {
      e.target.textContent = "View Details";
    }
});
