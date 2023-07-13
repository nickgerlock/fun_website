const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function(e) {
  const darkZone = document.getElementsByClassName('darkZone')[0];
  darkZone.style.display = 'block';
  darkMode.style.display = 'none';
});


window.onload = () => {
console.log("crazy pills 2")
  const header = document.getElementById('header');
  const content = document.getElementById('content');
  header.classList.remove('transparent');
  
  setTimeout(() => {
    content.classList.remove('transparent');
  }, 2000)
}
