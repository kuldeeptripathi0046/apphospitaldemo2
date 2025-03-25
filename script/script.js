  document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("header").innerHTML = data));
      
      fetch("about.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("about").innerHTML = data));

      fetch("testimonial.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("testimonial").innerHTML = data));

      fetch("buynow.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("buynow").innerHTML = data));

      fetch("pricing.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("pricing").innerHTML = data));
      
      fetch("features.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("features").innerHTML = data));
  
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data));
 
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    function startCounting(counter) {
        const target = parseInt(counter.getAttribute("data-target"));
        let currentNumber = 0;
        const duration = 2000; // 2 seconds
        const steps = 100; // 100 steps for smooth animation
        const increment = target / steps;
        let count = 0;

        function updateCounter() {
            if (count < steps) {
                currentNumber += increment;
                counter.innerText = Math.floor(currentNumber).toLocaleString() + "+";
                count++;
                setTimeout(updateCounter, duration / steps);
            } else {
                counter.innerText = target.toLocaleString() + "+"; // Ensure exact stop
            }
        }

        updateCounter();
    }

    counters.forEach(counter => startCounting(counter));
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Toggle menu visibility
  mobileMenuBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents click from bubbling up
      mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
          mobileMenu.classList.remove("active");
      }
  });
});





// pricing section 

setTimeout(function () {
    // Get the pricing section element
    const pricingSection = document.querySelector('.pricing_section');
    if (!pricingSection) {
      console.error('Pricing section not found.');
      return;
    }
  
    // Define counters with their selectors, target numbers, and durations
    const counters = [
      { selector: '.number1', target:  955878, duration: 10000 },
      { selector: '.number2', target: 113540, duration: 10000 },
      { selector: '.number3', target:   178658, duration: 10000 }
    ];
  
    // Find and attach each counter's DOM element
    counters.forEach(counter => {
      counter.element = document.querySelector(counter.selector);
      if (!counter.element) {
        console.error(`Element with selector "${counter.selector}" not found.`);
      }
    });
  
    let animationStarted = false;
  
    // Function to animate a single counter
    function animateCount(timestamp, counter) {
      if (!counter.startTime) counter.startTime = timestamp;
      const progress = timestamp - counter.startTime;
  
      // Calculate the current number based on progress
      const currentNumber = Math.min(Math.floor((progress / counter.duration) * counter.target), counter.target);
      
      // Update the element's text with a formatted number and a trailing plus sign
      counter.element.textContent = currentNumber.toLocaleString() + '+';
  
      // Continue the animation until the duration is reached
      if (progress < counter.duration) {
        window.requestAnimationFrame(ts => animateCount(ts, counter));
      }
    }
  
    // IntersectionObserver callback to start all animations when the pricing section is visible
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          observer.unobserve(pricingSection); // Stop observing after triggering
          counters.forEach(counter => {
            if (counter.element) {
              window.requestAnimationFrame(ts => animateCount(ts, counter));
            }
          });
        }
      });
    }
  
    // Use IntersectionObserver if available
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Adjust threshold as needed (0.5 means 50% visible)
      });
      observer.observe(pricingSection);
    } else {
      // Fallback: Use scroll event for browsers that don't support IntersectionObserver
      function checkVisibility() {
        const rect = pricingSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0 && !animationStarted) {
          animationStarted = true;
          counters.forEach(counter => {
            if (counter.element) {
              window.requestAnimationFrame(ts => animateCount(ts, counter));
            }
          });
          window.removeEventListener('scroll', checkVisibility);
        }
      }
      window.addEventListener('scroll', checkVisibility);
      checkVisibility(); // Check once immediately in case the section is already in view
    }
  }, 3000);
      
      
      
      