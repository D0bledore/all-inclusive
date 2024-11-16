function loadNavbar() {
  const currentPage = window.location.pathname;

  const navbarHtml = `
      <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="index.html">
                  <img src="assets/images/logo-light.png" id=logo alt="Website Logo" class="logo-img" style="width: 120px;">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "/index.html" ? "active" : ""
                          }" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "/profiling.html" ? "active" : ""
                          }" href="profiling.html">Profiling</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "/core-concepts.html"
                              ? "active"
                              : ""
                          }" href="core-concepts.html">Core Concepts</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "/about.html" ? "active" : ""
                          }" href="about.html">About Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "/contact.html" ? "active" : ""
                          }" href="contact.html">Contact</a>
                      </li>
                        <li class="nav-item dropdown-center">
                            <a class="nav-link dropdown-toggle" href="#" id="settings-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Settings">
                                <i class="fas fa-cog"></i>
                                Settings
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="settings-toggle">
                                <li class="nav-item" data-toggle="tooltip" data-placement="bottom" title="Toggle light mode / dark mode">
                                    <a id="theme-toggle" href="#" class="nav-link">
                                        <i id="theme-icon" class="fas fa-moon"></i>
                                        Toggle Theme
                                    </a>
                                <li><a class="dropdown-item" href="#" id="font-toggle"><i class="fas fa-font"></i> Toggle Font</a></li>
                            </ul>
                        </li>    
                  </ul>
              </div>
          </div>
      </nav>`;

  document
    .getElementById("navbar-placeholder")
    .insertAdjacentHTML("afterbegin", navbarHtml);
}

// Function to load the Footer
function loadFooter() {
  const footerHtml = `
      <footer class="footer text-white text-center py-4">
          <div class="container">
              <!-- Contact link -->
              <a href="contact.html" class="link text-white me-3 text-decoration-none">
                  <i class="fas fa-envelope"></i> Contact Us
              </a>
  
              <!-- Social Media Links -->
              <a href="https://www.facebook.com/" target="_blank" class="link text-white me-3 text-decoration-none">
                  <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" class="link text-white me-3 text-decoration-none">
                  <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" class="link text-white text-decoration-none">
                  <i class="fab fa-instagram"></i>
              </a>
          </div>
      </footer>`;

  document
    .getElementById("footer-placeholder")
    .insertAdjacentHTML("beforeend", footerHtml);
}

// Call the functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
  loadFooter();
});
