document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("scrollContainer");
  let currentIndex = 0;
  const images = scrollContainer.querySelectorAll(".scroll-image");
  const totalImages = images.length;

  function updateVisibility() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none";
    });
  }

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();

    if (evt.deltaY > 0) {
      // Scroll to the right
      if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateVisibility();
      } else {
        window.scrollBy(0, evt.deltaY);
      }
    } else {
      // Scroll to the left (disable backward scrolling)
      window.scrollBy(0, evt.deltaY);
    }
  });

  // Initial visibility
  updateVisibility();
});
