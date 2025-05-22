const envelope = document.querySelector('.envelope-wrapper');
const heartsInside = document.querySelectorAll('.heart-inside');
const nextBtn = document.querySelector('.next-btn');

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

nextBtn.addEventListener('click', () => {
  window.location.href = "count mounts.html"; // เปลี่ยนลิงก์ตามต้องการ
});
