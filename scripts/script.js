const themeButtons = document.querySelectorAll('.theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('theme-menu-button-active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('theme-menu-button-light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('theme-menu-button-dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('theme-menu-button-active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('theme-menu-button-active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.theme-menu-button-${theme}`)
      .classList.add('theme-menu-button-active');
    document
      .querySelector(`.theme-menu-button-${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();
