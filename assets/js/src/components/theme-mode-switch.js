/**
 * Theme Mode Switch
 * Switch betwen light/dark mode. The chosen mode is saved to browser's local storage
*/

const themeModeSwitch = (() => {

  let modeSwitch = document.querySelector('[data-bs-toggle="mode"]');
  
  if(modeSwitch === null) return;

  let checkbox = modeSwitch.querySelector('.form-check-input');

  if (mode === 'light') {
    root.classList.remove('dark-mode');
    checkbox.checked = false;
  } else {
    root.classList.add('dark-mode');
    checkbox.checked = true;
  }

  modeSwitch.addEventListener('click', (e) => {
    if (checkbox.checked) {
      root.classList.add('dark-mode');
      window.localStorage.setItem('mode', 'dark');
    } else {
      root.classList.remove('dark-mode');
      window.localStorage.setItem('mode', 'light');
    }
  });

})();

export default themeModeSwitch;
