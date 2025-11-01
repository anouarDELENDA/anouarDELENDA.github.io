const form = document.getElementById("contactForm");
const popup = document.getElementById("popupOverlay");
const progressBar = document.getElementById("progressBar");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Show popup
  popup.style.display = "flex";

  // Animate progress bar
  let width = 0;
  const interval = setInterval(() => {
    width += 1; // increase 1%
    progressBar.style.width = width + "%";
    if (width >= 100) {
      clearInterval(interval);
      // Redirect to home page
      window.location.href = "../../index.html"; // Change '/' to your actual home page URL if needed
    }
  }, 30); // 30ms x 100 = ~3 seconds
});
