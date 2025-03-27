// Back to Top Button Functionality
$(document).ready(function() {
    // Show or hide the back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    // Smooth scroll to top
    $('#toTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Initialize Bootstrap tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Initialize Bootstrap popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Active link highlighting
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation ||
            currentLocation.includes(item.getAttribute('href')) && item.getAttribute('href') !== '#') {
            item.classList.add('active');
        } else if (currentLocation === '/' && item.getAttribute('href') === 'index.html') {
            item.classList.add('active');
        }
    });
});
