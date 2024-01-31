window.addEventListener('DOMContentLoaded', (event) => {
    const filterNavElements = document.querySelector('#filter-nav').querySelectorAll('a');
    const galleryContainers = document.querySelectorAll('.gallery-flex-container');

    filterNavElements.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all filters, then apply it to clicked filter
            filterNavElements.forEach(link => link.classList.remove('active'));
            element.classList.add('active');

            const filterValue = element.getAttribute('data-filter');

            Array.from(galleryContainers).forEach((item) => {
                if(filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});