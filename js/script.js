// script.js adalah tempat memadukan tampilan dengan rumus logika yang dibutuhkan agar tampilan lebih dinamis
function calculatebmi(event) {

 // fuction bertugas memberikan fungsi pengoprasian pada objek yang dikaitkan dari html
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;

    console.log() // debugging untuk jaga jaga kemungkinan bug
    
    if (height > 0 && weight > 0) { //menggunakan rumus if else untuk merumuskan kalkulasi dan langkah prediktif lainnya
        var bmi = weight / (height * height);
        var resultText = '';
        var categoryText = '';

        if (bmi < 18.5) {
            categoryText = 'berat badan dibawah ideal';
            resultText = 'Kekurangan Berat Badan';
        } else if (bmi < 24.9) {
            categoryText = 'Berat badan ideal';
            resultText = 'Ideal';
        } else if (bmi < 29.9) {
            categoryText = 'berat badan berlebih';
            resultText = 'Kelebihan Berat Badan';
        } else {
            categoryText = 'Berat obesitas';
            resultText = 'Obesitas';
        }
        
        
        
        document.getElementById('bmi-result').innerHTML = 'Kamu ' + resultText;
        document.getElementById('bmi-value').innerHTML = bmi.toFixed(2);
        document.getElementById('bmi-category').innerHTML = 'Kamu memiliki ' + categoryText;
    } else {
        document.getElementById('bmi-value').innerHTML = '';
        document.getElementById('bmi-category').innerHTML = 'Masukkan tinggi dan berat badan yang valid.';
    }
}


function resetbmi() {
    document.getElementById('height').value = ''; // document.getElemetById bertugas mengaitkan element berdasarkan id yang dibuat di html
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-result').innerText = '';
    document.getElementById('bmi-value').innerText = '';
    document.getElementById('bmi-category').innerText = '';
}
function showalertkonsul() {
    alert("Silahkan konsultasi ke dokter terdekat") ; //alert berfungsi memberikan pop-up notifikasi
}
function showalertregist() {
    alert("Silahkan registrasi disini") ;
}
function showalertkonsulgizi() {
    alert("Silahkan konsultasi Gizi disini") ;
}
function showalertregistahli() {
    alert("Silahkan registrasi ahli disini") ;
}