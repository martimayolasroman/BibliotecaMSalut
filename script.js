function toggleFilter(filterName) {
    var filterSection = document.getElementById(filterName);
    var arrow = document.querySelector(`button[data-target="${filterName}"] .arrow`);
    // Cambia solo el estado de la sección de filtro específica que fue clickeada
    if (filterSection.style.display === "block") {
        filterSection.style.display = "none";
        arrow.classList.remove('active');
    } else {
        filterSection.style.display = "block";
        arrow.classList.add('active');
    }



}

document.querySelectorAll('.checkbox-container input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', filterApps);
    
});

document.querySelectorAll('filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        var arrow = this.querySelector('.arrow');
        var filterSection = document.getElementById(this.getAttribute('data-target'));
        if (filterSection.style.display === "block") {
            filterSection.style.display = "none";
            arrow.classList.remove('active');
        } else {
            filterSection.style.display = "block";
            arrow.classList.add('active');
        }
    });
});

function filterApps() {
    const filters = document.querySelectorAll('.checkbox-container input[type="checkbox"]:checked');
    const cards = document.querySelectorAll('.game-card');
    let visibleCards = 0;

    cards.forEach(card => {
        let isVisible = Array.from(filters).every(filter => {
            const filterType = filter.name;
            const filterValue = filter.value;
            const attribute = card.getAttribute(`data-${filterType}`);
            return attribute && attribute.includes(filterValue);
        });
        if (isVisible) {
            card.style.display = 'block';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });

    // Comprobar si hay tarjetas visibles
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (visibleCards > 0) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }

}
