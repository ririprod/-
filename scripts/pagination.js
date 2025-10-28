const buttons = document.querySelectorAll('.page-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active') && !btn.disabled) {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });
});
