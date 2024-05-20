
  document.addEventListener('DOMContentLoaded', () => {
      const scrollContainer = document.getElementById('scrollContainer');
      const images = scrollContainer.getElementsByClassName('scroll-image');
      const windowHeight = window.innerHeight;

      window.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;

          Array.from(images).forEach((img, index) => {
              const imageOffset = index * windowHeight * 0.5;

              if (scrollPosition > imageOffset - windowHeight && scrollPosition < imageOffset + windowHeight) {
                  img.classList.add('visible');
              } else {
                  img.classList.remove('visible');
              }
          });
      });
  });
