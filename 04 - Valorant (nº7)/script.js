const btns = document.querySelectorAll('button');
console.log(btns);
const photo = document.querySelector('.character-photo img');

photo.classList.add('enlarge');



btns.forEach(btn => {
  btn.addEventListener('click', () => {
      const imgSrc = btn.getAttribute('aria-controls');
      console.log(imgSrc);
    photo.src = 'img/' + imgSrc + '.png';
    photo.classList.add('enlarge');
    setTimeout(() => {
      photo.classList.remove('enlarge');
    }, 300);
  });
});

