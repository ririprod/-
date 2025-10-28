document.getElementById('age-popup').style.display = 'flex';

function confirmAge(isAdult) {
  if (isAdult) {
    localStorage.setItem('isAdult', 'true');
    document.getElementById('age-popup').style.display = 'none';
  } else {
    window.location.href = 'https://www.google.com';
  }
}

window.onload = function() {
  if (localStorage.getItem('isAdult') === 'true') {
    document.getElementById('age-popup').style.display = 'none';
  }
};
