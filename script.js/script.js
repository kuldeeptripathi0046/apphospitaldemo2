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
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL, removing any fragment
    var documentUrl = document.location.href.replace(/#.*$/, "");
  
    // Iterate through all links
    var linkEls = document.getElementsByTagName("A");
    for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
      var linkEl = linkEls[linkIndex];
  
      // Ignore links that don't begin with #
      if (!linkEl.getAttribute("href").match(/^#/)) {
        continue;
      }
  
      // Convert to an absolute URL
      linkEl.setAttribute("href", documentUrl + linkEl.getAttribute("href"));
    }
  });
    // Toggle search bar visibility
    function toggleSearch() {
        const searchInput = document.getElementById('searchInput');
        searchInput.style.display = searchInput.style.display === 'none' || searchInput.style.display === '' ? 'block' : 'none';
      }



      document.addEventListener("DOMContentLoaded", () => {
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        const mobileMenu = document.querySelector(".mobile-menu");
        let isMenuOpen = false;
      
        function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          mobileMenu.classList.toggle("active");
      
          // Animate hamburger to X
          const spans = mobileMenuBtn.querySelectorAll("span");
          if (isMenuOpen) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
          } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
          }
        }
      
        mobileMenuBtn.addEventListener("click", toggleMenu);
      
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        mobileMenuLinks.forEach((link) => {
          link.addEventListener("click", () => {
            if (isMenuOpen) toggleMenu();
          });
        });
      
        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
          if (
            isMenuOpen &&
            !mobileMenu.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)
          ) {
            toggleMenu();
          }
        });
      
        // Handle window resize
        window.addEventListener("resize", () => {
          if (window.innerWidth >= 768 && isMenuOpen) {
            toggleMenu();
          }
        });
      });
      
      
      