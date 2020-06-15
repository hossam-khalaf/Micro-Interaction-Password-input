const action = document.querySelector('.action');
const eye = document.querySelector('.eye');

action.addEventListener('click', () => {
  const root = document.documentElement;
  const Password = document.getElementById('password');

  root.style.setProperty('--scale', 'scaleX(1)');
  root.style.setProperty('--opacity', 1);

  if (Password.value === 'password') {
    action.dataset.content = 'Welcome Back';
    root.style.setProperty('--color', 'lightseagreen');
  } else {
    action.dataset.content = 'Invalid Password';
    root.style.setProperty('--color', 'tomato');
  }
});
