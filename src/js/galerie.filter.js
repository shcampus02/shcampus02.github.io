window.addEventListener('DOMContentLoaded', (event) => {
    const filterNavElements = document.querySelector('#filter-nav').querySelectorAll('a');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterNavElements.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all filters, then apply it to clicked filter
            filterNavElements.forEach(link => link.classList.remove('active'));
            element.classList.add('active');

            const filterValue = element.getAttribute('data-filter');

            Array.from(galleryItems).forEach((item) => {
                if(filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});