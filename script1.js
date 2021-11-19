window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if (window.scrollY <= 300) {
    let tdiv = document.querySelector('.top_text');
    tdiv.style.fontSize = `${(window.scrollY / 10)  + 27}px`;  
  }
  else if (window.scrollY >= 301 && window.scrollY <= 620) {
    let hr = document.querySelector('.center_top');
    hr.style.width = `${window.scrollY / 1.5}px`;
  }
  else if (window.scrollY >= 621 && window.scrollY <= 839) {
    let jpg = document.querySelector('.center_bottom');
    jpg.style.right = `${(window.scrollY / 3) - 142}px`;
  }
  else if (window.scrollY >= 840) {
    let bdiv = document.querySelector('.bottom_text');
    bdiv.style.fontSize = `${141 - (window.scrollY / 10)}px`;
  }
});
