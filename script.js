// แสดงภาพในโมดอลเมื่อกดปุ่ม "ดูรูปภาพ"
document.getElementById('viewImageBtn').addEventListener('click', function() {
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImage');
    
    // เปิดโมดอลและแสดงภาพตัวอย่าง
    modal.style.display = "block";
    modalImg.src = "24.png";  // แทนที่ด้วย URL ของภาพตัวอย่าง
});

// ปิดโมดอลเมื่อกดปุ่มปิด (x)
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    console.log("close");
    document.getElementById('imageModal').style.display = "none";
});
