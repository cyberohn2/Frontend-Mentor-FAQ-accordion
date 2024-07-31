const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    const toggle = accordion.querySelector('.accordion-toggle');
    const accordionContent = accordion.querySelector('.accordion-content');
    const toggleImg = accordion.querySelector('.accordion-toggle > img');

    let isToggled = toggle.getAttribute('data-toggled');
    toggleImg.src = isToggled === 'true' ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';

    const toggleAccordion = () => {
        isToggled = toggle.getAttribute('data-toggled');

        if (isToggled === 'true') {
            accordionContent.classList.remove('visible');
            toggle.setAttribute('data-toggled', 'false');
            toggle.setAttribute('aria-expanded', 'false');
            toggleImg.src = './assets/images/icon-plus.svg';
        } else {
            accordionContent.classList.add('visible');
            toggle.setAttribute('data-toggled', 'true');
            toggle.setAttribute('aria-expanded', 'true');
            toggleImg.src = './assets/images/icon-minus.svg';
        }
    };

    toggle.addEventListener('click', e => {
        e.preventDefault();
        toggleAccordion();
    });

    toggle.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion();
        }
    });
});
