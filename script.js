// ambil elemen input warna & div preview
const colorPicker = document.getElementById("warna");
const preview = document.getElementById("preview");

// kasih warna awal sesuai value input
preview.style.backgroundColor = colorPicker.value;

// kalau user ganti warna, preview ikut berubah
colorPicker.addEventListener("input", function() {
  preview.style.backgroundColor = this.value;
});
