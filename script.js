document.getElementById('menuToggle').addEventListener('click', function () {
  const sideNav = document.getElementById('sideNav');
  const toggleButton = this;

  if (sideNav.classList.contains('open')) {
    sideNav.classList.remove('open');
    toggleButton.textContent = '☰'; // Change to menu icon
  } else {
    sideNav.classList.add('open');
    toggleButton.textContent = '✖'; // Change to close icon
  }
});