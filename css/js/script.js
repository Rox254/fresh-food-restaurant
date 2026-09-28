// ========================================
// FRESH FOOD RESTAURANT
// MAIN JAVASCRIPT
// ========================================


// MOBILE NAVIGATION

function toggleMenu() {

  const nav = document.getElementById("navLinks");

  if (nav) {
    nav.classList.toggle("active");
  }

}


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      const nav = document.getElementById("navLinks");

      if (nav) {
        nav.classList.remove("active");
      }

    });

  });

});
