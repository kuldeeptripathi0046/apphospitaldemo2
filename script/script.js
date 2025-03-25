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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target"); // Get target number
      let count = 0;
      let isCounting = true;

      // Function to increment and decrement quickly
      const fastScroll = setInterval(() => {
          count = Math.floor(Math.random() * target); // Generate random value in range
          counter.innerText = count.toLocaleString() + "+"; // Format number
      }, 100); // Update every 100ms

      // Stop after 2 seconds and set final value
      setTimeout(() => {
          clearInterval(fastScroll); // Stop fast counting
          counter.innerText = target.toLocaleString() + "+"; // Set final value
      }, 2000); // Stop after 2 seconds
  });
});

      
      
      
      