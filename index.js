// ดักจับเหตุการณ์ submit ของฟอร์ม
document.getElementById('checkForm').addEventListener('submit', function(event) {
  const inputValue = document.getElementById('apassword').value;

  // ตรวจสอบว่าค่าที่กรอกเป็น "23" หรือไม่
  if (inputValue !== "23") {
    event.preventDefault(); // หยุดการส่งฟอร์ม
    showModal(); // แสดง Modal แจ้งเตือน
  }
});

// ฟังก์ชันสำหรับแสดง Modal
function showModal() {
  const modal = document.getElementById("errorModal");
  modal.style.display = "flex"; // ใช้ flex เพื่อจัดให้อยู่ตรงกลาง

  // ปิดเมื่อกดที่กากบาท
  const closeBtn = modal.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// ฟังเหตุการณ์คลิกนอก modal-content เพื่อปิด modal
window.addEventListener('click', function (event) {
  const modal = document.getElementById("errorModal");
  if (modal.style.display === "flex" && event.target === modal) {
    modal.style.display = "none";
  }
});
