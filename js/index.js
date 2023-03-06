function toggleCardBtns() {
    // console.log('over')
}

function burgerHandler() {
    let bars = document.querySelector('.burger__bars').children;
    bars[1].classList.toggle('decreaseWidth');
    bars[0].classList.toggle('rotateFirst');
    bars[2].classList.toggle('rotateThird');
    document.querySelector('.navigation').classList.toggle('hidden')
}