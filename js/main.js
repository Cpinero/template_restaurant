window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



function toggleMenu() {
    const menuToogle = document.querySelector('.menuToogle');
    const navigation = document.querySelector('.navigation');
    menuToogle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const section = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);