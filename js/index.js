let header = document.querySelector(".header");
let headerHeight = parseInt(window.getComputedStyle(header).getPropertyValue('height'));
let offset = window.pageYOffset;

function usingMobile() {
    const mediaQuery = window.matchMedia('(max-width: 1000px)')
    return mediaQuery.matches;
}

function morphBurger() {
    let bars = document.querySelector('.burger__bars').children;
    bars[1].classList.toggle('decreaseWidth');
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
    }
    else window.onscroll = hideHeaderOnScroll;
}

function hideHeaderOnScroll() {
    if (window.pageYOffset >= offset) {
        header.style.top = "-" + headerHeight + "px";
    } else {
        header.style.top = "0";
    }
    offset = window.pageYOffset

    if (window.pageYOffset < headerHeight) {
        header.style.top = "-" + offset + "px";
        console.log(offset)
        console.log(window.pageYOffset)
        return;
    }
}

initHidingHeader();