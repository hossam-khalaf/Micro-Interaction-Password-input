const action = document.querySelector('.action');
const eye = document.querySelector('.eye');
let open = false;
let showPass = false;

action.addEventListener('click', () => {
  const root = document.documentElement;
  const Password = document.getElementById('password');
  const arrow = document.getElementById('arrow');
  const check = document.getElementById('check');
  const times = document.getElementById('times');

  arrow.classList.add('hide');
  check.classList.add('hide');
  times.classList.add('hide');

  if (open) {
    root.style.setProperty('--color', '#09141f');
    root.style.setProperty('--scale', 'scaleX(0)');
    root.style.setProperty('--opacity', 0);
    arrow.classList.remove('hide');
  } else {
    if (Password.value === 'password') {
      action.dataset.content = 'Welcome Back';
      root.style.setProperty('--color', 'lightseagreen');
      check.classList.remove('hide');
    } else {
      action.dataset.content = 'Invalid Password';
      root.style.setProperty('--color', 'tomato');
      times.classList.remove('hide');
    }
    root.style.setProperty('--scale', 'scaleX(1)');
    root.style.setProperty('--opacity', 1);
  }

  open = !open;
});

eye.addEventListener('click', () => {
  const Password = document.getElementById('password');
  const openEye = document.getElementById('openEye');
  const closeEye = document.getElementById('CloseEye');

  openEye.classList.toggle('hide');
  closeEye.classList.toggle('hide');

  if (showPass) {
    Password.setAttribute('type', 'password');
  } else {
    Password.setAttribute('type', 'text');
  }

  showPass = !showPass;
});
