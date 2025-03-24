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