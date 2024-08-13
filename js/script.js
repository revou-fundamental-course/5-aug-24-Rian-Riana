// script.js
function calculateBMI(event) {


    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;

    console.log()
    
    if (height > 0 && weight > 0) {
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
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-result').innerText = '';
    document.getElementById('bmi-value').innerText = '';
    document.getElementById('bmi-category').innerText = '';
}
function showAlertKonsul() {
    alert("Silahkan konsultasi ke dokter terdekat") ;
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