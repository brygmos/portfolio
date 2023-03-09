let header = document.querySelector(".header");
let headerHeight = window.getComputedStyle(header).getPropertyValue('height');
let prevScrollPos = window.pageYOffset;

function usingMobile() {
    const mediaQuery = window.matchMedia('(max-width: 1000px)')
    return mediaQuery.matches;
}

function morphBurger() {
    let bars = document.querySelector('.burger__bars').children;
    bars[1].classList.toggle('decreaseWidth');
    bars[0].classList.toggle('decreaseWidth');
    bars[2].classList.toggle('decreaseWidth');
    bars[0].classList.toggle('rotateFirst');
    bars[2].classList.toggle('rotateThird');

}

function burgerHandler() {
    morphBurger()
    header.classList.toggle('hidden')
}

function initHidingHeader() {
    if (usingMobile()) {
        header.classList.toggle('hidden')
    } else {
        window.onscroll = hideNavBarOnScroll;
    }
}

function hideNavBarOnScroll() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-" + headerHeight;
    }
    prevScrollPos = currentScrollPos;
}


initHidingHeader();