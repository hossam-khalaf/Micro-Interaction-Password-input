const action = document.querySelector('.action');
const eye = document.querySelector('.eye');

action.addEventListener('click', () => {
  const root = document.documentElement;
  root.style.setProperty('--scale', 'scaleX(1)');
  action.dataset.content = 'Invalid password';
});
