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
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // For animating the burger if you want
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));
