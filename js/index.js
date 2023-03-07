let header = document.querySelector(".header");
let headerHeight = window.getComputedStyle(header).getPropertyValue('height');
let prevScrollPos = window.pageYOffset;

function burgerHandler() {
    let bars = document.querySelector('.burger__bars').children;
    bars[1].classList.toggle('decreaseWidth');
    bars[0].classList.toggle('rotateFirst');
    bars[2].classList.toggle('rotateThird');
    document.querySelector('.navigation').classList.toggle('hidden')
}

function initHidingHeader() {
    window.onscroll = hideNavBarOnScroll;
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