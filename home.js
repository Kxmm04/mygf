const envelope = document.querySelector('.envelope-wrapper');
const heartsInside = document.querySelectorAll('.heart-inside');

envelope.addEventListener('click', () => {
  if (!envelope.classList.contains('flap')) {
    envelope.classList.add('flap');
  } else {
    envelope.classList.remove('flap');
    // รีเซ็ตอนิเมชันหัวใจข้างในทีละดวง
    heartsInside.forEach(heart => {
      heart.style.animation = 'none';
      heart.offsetHeight; // trigger reflow
      heart.style.animation = '';
    });
  }
});
