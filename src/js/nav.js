window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        toggleMenu();
    })

    window.addEventListener('pageshow', function() {
        if (menu_btn.classList.contains('is-active')) {
            mobile_menu.classList.add('notransition');
            toggleMenu();

            void mobile_menu.offsetWidth;

            mobile_menu.classList.remove('notransition');
        }
    });

    function toggleMenu() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

        const ariaExpanded = menu_btn.getAttribute('aria-expanded') === 'true';
        menu_btn.setAttribute('aria-expanded', !ariaExpanded);
    }
}