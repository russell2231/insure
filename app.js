const toggleNav = document.querySelector('#toggle');

toggleNav.addEventListener('click', () => {
  const showcase = document.querySelector('.showcase');
  const header = document.querySelector('.main-header');
  header.classList.toggle('open');
  showcase.classList.toggle('open');
})