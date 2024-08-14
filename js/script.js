// script.js adalah tempat memadukan tampilan dengan rumus logika yang dibutuhkan agar tampilan lebih dinamis
function calculateBMI(event) {

 // fuction bertugas memberikan fungsi pengoprasian pada objek yang dikaitkan dari html
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;

    console.log() // debugging untuk jaga jaga kemungkinan bug
    
    if (height > 0 && weight > 0) { //menggunakan rumus if else untuk merumuskan kalkulasi dan langkah prediktif lainnya
        var bmi = weight / (height * height);
        var resultText = '';
        var categoryText = '';

        if (bmi < 18.5) {
            categoryText = 'kekurangan berat badan';
            resultText = 'Berat Badan Kurang';
        } else if (bmi < 24.9) {
            categoryText = 'Berat Badan Normal';
            resultText = 'Berat Badan Normal';
        } else if (bmi < 29.9) {
            categoryText = 'berat badan berlebih';
            resultText = 'Berat Badan Lebih';
        } else {
            categoryText = 'Berat Badan Obesitas';
            resultText = 'Berat Badan Obesitas';
        }
        
        
        
        document.getElementById('bmi-result').innerHTML = 'Hasil ' + resultText;
        document.getElementById('bmi-value').innerHTML = bmi.toFixed(2);
        document.getElementById('bmi-category').innerHTML = 'Anda memiliki ' + categoryText;
    } else {
        document.getElementById('bmi-value').innerHTML = '';
        document.getElementById('bmi-category').innerHTML = 'Masukkan tinggi dan berat badan yang valid.';
    }
}


function resetBMI() {
    document.getElementById('height').value = ''; // document.getElemetById bertugas mengaitkan element berdasarkan id yang dibuat di html
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-result').innerText = '';
    document.getElementById('bmi-value').innerText = '';
    document.getElementById('bmi-category').innerText = '';
}
function showAlertKonsul() {
    alert("Silahkan konsultasi ke dokter terdekat") ; //alert berfungsi memberikan pop-up notifikasi
}
function showAlertRegist() {
    alert("Silahkan registrasi disini") ;
}
function showAlertKonsulGizi() {
    alert("Silahkan konsultasi Gizi disini") ;
}
function showAlertRegistAhli() {
    alert("Silahkan registrasi ahli disini") ;
}