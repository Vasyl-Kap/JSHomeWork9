// #1

// window.addEventListener('scroll', () => {
//     console.log(event);
//     console.log(window.scrollY);
//     if (window.scrollY <= 100 && window.scrollY >= 0) {
//         document.querySelector('.top_text').style.fontSize = '26px';
//     }
//     else if (window.scrollY > 100 && window.scrollY <= 200) {
//         document.querySelector('.top_text').style.fontSize = '27px';
//     }
//     else if (window.scrollY > 200 && window.scrollY <= 300) {
//         document.querySelector('.top_text').style.fontSize = '28px';
//     }
//     else if (window.scrollY > 300 && window.scrollY <= 400) {
//         document.querySelector('.top_text').style.fontSize = '29px';
//     }
// })

window.addEventListener('scroll', updateDivFontSize);

function updateDivFontSize() {
    var text = document.querySelector('.top_text'),
        divScrollCoef = getScrollCoef(text);

    text.style.fontSize = divScrollCoef * 9 + 1 + 'vw';
}

function getScrollCoef(element) {
    var elementRect = element.getBoundingClientRect(),
        elementOffsetTop = elementRect.top,
        elementOffsetBottom = elementRect.bottom,
        windowOffsetBottom = document.documentElement.clientHeight,
        coef;

    if (windowOffsetBottom < elementOffsetTop) {
        coef = 0;
    } else if (windowOffsetBottom > elementOffsetBottom) {
        coef = 1;
    } else {
        coef = (windowOffsetBottom - elementOffsetTop) / (elementOffsetBottom - elementOffsetTop);
    }

    return coef;
}

// #2