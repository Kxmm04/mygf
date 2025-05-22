function updateCountdown() {
    const now = new Date();
    const startDate = new Date(2024, 10, 23, 0, 0, 0); // 23 พ.ย. 2024
  
    let totalMilliseconds = now - startDate;
    if (totalMilliseconds < 0) totalMilliseconds = 0;
  
    // คำนวณจำนวนเดือน (แบบแม่นยำ)
    let months =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
  
    if (now.getDate() < startDate.getDate()) {
      months--; // ยังไม่ครบเดือนนี้
    }
  
    // คำนวณจำนวนวัน ชั่วโมง นาที วินาที
    const seconds = Math.floor(totalMilliseconds / 1000) % 60;
    const minutes = Math.floor(totalMilliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60)) % 24;
    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
  
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  // ปุ่มย้อนกลับ
  document.querySelector('.back-btn').addEventListener('click', () => {
    window.history.back(); // หรือใส่ลิงก์ตรงก็ได้
    });
    nextBtn.addEventListener('click', () => {
        window.location.href = "count mounts.html"; // เปลี่ยนลิงก์ตามต้องการ
  });
  