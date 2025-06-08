// Show button when scrolled down
window.onscroll = function () {
  let btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll smoothly to the top when clicked
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
