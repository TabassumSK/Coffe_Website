document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('navlist');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('open');

        const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
        menuIcon.setAttribute('aria-expanded', !isExpanded);
    });
});
