function switchTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('active');
}

function autoFacebook() {
  alert('Đang auto kết bạn / vào nhóm... Chức năng này sẽ kết nối với API Facebook khi có.');
}

function findTrendingProduct() {
  const keyword = prompt("Nhập từ khóa sản phẩm:");
  document.getElementById('productResult').innerText = "Tìm sản phẩm hot theo từ khóa: " + keyword;
}

function generateVideo() {
  const content = document.querySelector('#video textarea').value;
  document.getElementById('videoResult').innerHTML = `<p>Video đang được tạo từ AI: "${content}"</p>`;
}

function generateCCCD() {
  const name = document.querySelector('#kyc input[placeholder=\"Họ tên\"]').value;
  const cccd = document.querySelector('#kyc input[placeholder=\"Số CCCD\"]').value;
  const dob = document.querySelector('#kyc input[type=\"date\"]').value;
  document.getElementById('cccdResult').innerHTML = `CCCD ảo: ${name} - ${cccd} - ${dob} (ảnh sẽ sinh khi tích hợp AI).`;
}

function simulateNFC() {
  const nfcData = document.querySelector('#nfc input').value;
  document.getElementById('nfcOutput').innerText = `NFC Đọc: ${nfcData} (thẻ ảo).`;
}
