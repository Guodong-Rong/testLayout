document.addEventListener('DOMContentLoaded', function() {
    var navUl = document.querySelector('nav ul');
    var menuToggle = document.querySelector('.menu-toggle');

    // Toggle show class on ul when menu toggle is clicked
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
        console.log ('It showed');
    });

    // Hide navigation list when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navUl.contains(event.target) && !menuToggle.contains(event.target)) {
            navUl.classList.remove('show');
            console.log ('It clicked outside');
        }
    });

    // Prevent hiding the list when clicking on the nav button itself
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        console.log ('It stopped');
    });
});

