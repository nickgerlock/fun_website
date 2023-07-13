const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function(e) {
  const darkZone = document.getElementsByClassName('darkZone')[0];
  darkZone.style.display = 'block';
  darkMode.style.display = 'none';
});

const header = document.getElementById('header');
const content = document.getElementById('content');
header.style.opacity = 0;
content.style.opacity = 0;

setTimeout(() => {
  header.style.opacity = 1;
}, 100);

setTimeout(() => {
  content.style.opacity = 1;
}, 2000)
