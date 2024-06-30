
const ul = document.querySelector('.list'); 

ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const previouslyActive = ul.querySelector('.active');
    if (previouslyActive) {
      previouslyActive.classList.remove('active');
    }
    event.target.classList.add('active');
  }
});