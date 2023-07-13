const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function(e) {
  const darkZone = document.getElementsByClassName('darkZone')[0];
  darkZone.style.display = 'block';
  darkMode.style.display = 'none';
});

const header = document.getElementById('header');
header.style.opacity = 1;

setTimeout(() => {
  const content = document.getElementById('content');
  content.style.opacity = 1;
}, 2000)
