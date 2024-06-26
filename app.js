let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nav_links');

menu.onclick = () => {
  menu.classList.toggle('bi-x');
  navBar.classList.toggle('open');
}

// Get the navigation bar
const header = document.getElementById('header-nav');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down past a certain point (e.g. 10px)
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the navbar
        header.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        header.classList.remove('scrolled');
    }
});