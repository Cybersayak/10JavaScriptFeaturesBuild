// Toggle the visibility of the navigation menu
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav-menu').classList.toggle('show');
});
