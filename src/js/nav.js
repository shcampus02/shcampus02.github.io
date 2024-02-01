window.onload = function() {
    var hamburger = document.getElementById('hamburger-icon');
    var closeMenu = document.getElementById('close-icon');
    var nav = document.getElementById('navigation').getElementsByTagName('ul')[0];
    var logo = document.getElementById('logo_header');

    hamburger.addEventListener('click', function() {
        nav.classList.add('open');
        hamburger.classList.add('open'); /* Hide hamburger */
        closeMenu.classList.add('open'); /* Show close-menu */
        logo.classList.add('hidden'); /* Hide logo when nav is open */
    });

    closeMenu.addEventListener('click', function() {
        nav.classList.remove('open');
        hamburger.classList.remove('open'); /* Show hamburger */
        closeMenu.classList.remove('open'); /* Hide close-menu */
        logo.classList.remove('hidden'); /* Show logo when nav is closed */
    });
};