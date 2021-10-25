// #1

window.addEventListener('scroll', () => {
    console.log(event);
    console.log(window.scrollY);
    if (window.scrollY <= 100 && window.scrollY >= 0) {
        document.querySelector('.top_text').style.fontSize = '26px';
    }
    else if (window.scrollY > 100 && window.scrollY <= 200) {
        document.querySelector('.top_text').style.fontSize = '27px';
    }
    else if (window.scrollY > 200 && window.scrollY <= 300) {
        document.querySelector('.top_text').style.fontSize = '28px';
    }
    else if (window.scrollY > 300 && window.scrollY <= 400) {
        document.querySelector('.top_text').style.fontSize = '29px';
    }
})

// #2