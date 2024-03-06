const smoothLink = document.querySelector('.main-screen__button');
smoothLink.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(".introduction").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});