document.addEventListener("DOMContentLoaded", function () {
    // Load external sections
    const sections = [
      { file: "header.html", id: "header" },
      { file: "about.html", id: "about" },
      { file: "testimonial.html", id: "testimonial" },
      { file: "buynow.html", id: "buynow" },
      { file: "pricing.html", id: "pricing" },
      { file: "features.html", id: "features" },
      { file: "footer.html", id: "footer" }
    ];
  
    sections.forEach(section => {
      fetch(section.file)
        .then(response => response.text())
        .then(data => {
          const element = document.getElementById(section.id);
          if (element) {
            element.innerHTML = data;
          }
        })
        .catch(error => console.error(`Error loading ${section.file}:`, error));
    });
  
    // Mobile Menu Toggle
    setTimeout(() => { // Ensure elements are loaded
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.querySelector(".mobile-menu");
  
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          mobileMenu.classList.toggle("active");
        });
  
        document.addEventListener("click", (e) => {
          if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
            mobileMenu.classList.remove("active");
          }
        });
      }
    }, 500); // Delay to ensure elements exist
  

    setTimeout(function () {
      const fadeInElements = document.querySelectorAll(".fade-left, .fade-right");
  
      const scrollHandler = () => {
        fadeInElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            element.classList.add("fade-in");
          }
        });
      };
  
      window.addEventListener("scroll", scrollHandler);
      window.addEventListener("load", scrollHandler);
    }, 2000);
  });










    // Pricing Section Counter Animation
    setTimeout(function () {
      const pricingSection = document.querySelector(".pricing_section");
      if (!pricingSection) return;
  
      const counters = [
        { selector: ".number1", target: 955878, duration: 10000 },
        { selector: ".number2", target: 113540, duration: 10000 },
        { selector: ".number3", target: 178658, duration: 10000 }
      ];
  
      counters.forEach(counter => {
        counter.element = document.querySelector(counter.selector);
      });
  
      let animationStarted = false;
  
      function animateCount(timestamp, counter) {
        if (!counter.startTime) counter.startTime = timestamp;
        const progress = timestamp - counter.startTime;
        const currentNumber = Math.min(Math.floor((progress / counter.duration) * counter.target), counter.target);
        counter.element.textContent = currentNumber.toLocaleString() + "+";
        if (progress < counter.duration) {
          window.requestAnimationFrame(ts => animateCount(ts, counter));
        }
      }
  
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animationStarted) {
            animationStarted = true;
            observer.unobserve(pricingSection);
            counters.forEach(counter => {
              if (counter.element) {
                window.requestAnimationFrame(ts => animateCount(ts, counter));
              }
            });
          }
        });
      }
  
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        observer.observe(pricingSection);
      } else {
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
            window.removeEventListener("scroll", checkVisibility);
          }
        }
        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
      }
    }, 3000);
  
    // Features & Testimonial Section Fade-in Effect



  