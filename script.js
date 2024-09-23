window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* Custom Cursor JS */

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  let moveTimeout;

  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // cursor.style.transform = 'scale(1)'; Enlarge cursor on movement setting, not gonna use it, as it complicates things & is not recommended

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
      //    cursor.style.transform = 'scale(1)'; // Shrink back to default size setting (related to the above-stated comment)
      }, 200);

      cursor.classList.remove('hidden');
  });

  document.addEventListener('mouseleave', () => {
      cursor.classList.add('hidden');
  });

  document.addEventListener('mousedown', () => {
      cursor.style.transform = 'scale(0.8)'; // Slightly shrink on click
  });

  document.addEventListener('mouseup', () => {
      cursor.style.transform = 'scale(1)'; // Return to normal size on release
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
          cursor.style.transform = 'scale(1)';
      }, 200);
  });

  document.querySelectorAll('button, a, img').forEach(element => {
    element.addEventListener('mouseover', (e) => {
        if (!e.target.classList.contains('no-cursor-effect')) {
            cursor.style.transform = 'scale(1.5)'; // Slightly enlarge when hovering over elements
        }
    });
    element.addEventListener('mouseout', (e) => {
        if (!e.target.classList.contains('no-cursor-effect')) {
            cursor.style.transform = 'scale(1)';
        }
    });
});
});




 // Shooting stars animation
 document.addEventListener('DOMContentLoaded', () => {
  const shootingStarsContainer = document.getElementById('about-me-container');
  const clickableImage = document.getElementById('landing-arrow');
  let isAnimationActive = false;

  clickableImage.addEventListener('click', () => {
      if (!isAnimationActive) {
          for (let i = 0; i < 7; i++) { // create 7 shooting stars
              createShootingStar();
          }
          isAnimationActive = true;
          setTimeout(() => {
              isAnimationActive = false;
          }, 1000); // 1 second delay
      }
  });

  function createShootingStar() {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      shootingStarsContainer.appendChild(star);
      setTimeout(() => {
          star.remove();
      }, 5000); // removing the stars -> matched with animation
  }

  function createShootingStars() {
      for (let i = 0; i < 10; i++) {
          createShootingStar();
      }
  }


  
  // intersection observer to trigger shooting stars animation when container is 40-50% visible
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8 && entry.intersectionRatio <= 0.9) {
              if (!isAnimationActive) {
                  createShootingStars();
                  isAnimationActive = true;
                  setTimeout(() => {
                      isAnimationActive = false;
                  }, 5000); // 5 seconds delay
              }
          }
      });
  }, { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) }); // multiple thresholds to get finer control

  // observing the stars container
  observer.observe(shootingStarsContainer);
});

/* Animations on scroll */

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animated-text');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // triggering when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // stop observing once the animation has been triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animated-text-left');

    const observerOptions = {
        root: null, // Observing in the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.includes('crios')) {
    // Apply Chrome-specific fix
} else if (userAgent.includes('brave')) {
    // Apply Brave-specific fix
}