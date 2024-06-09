
const responsiveBtn = document.querySelector('.responsive-btn');

responsiveBtn.addEventListener('click', menuShow = () => {
    let responsiveMenu = document.querySelector('.responsive-options');

    if (responsiveMenu.classList.contains('open')) {
        responsiveMenu.classList.remove('open');
    }
    else {
        responsiveMenu.classList.add('open');
    }
})

window.addEventListener('scroll', headerShadow = () => {
    let header = document.querySelector('.header-container');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.150)';
    }
    else {
        header.style.boxShadow = 'none';
    }
})