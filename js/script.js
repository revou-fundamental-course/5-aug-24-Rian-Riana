// script.js
function calculateBMI() {
    var height = document.getElementById('height').value / 100; // convert to meters
    var weight = document.getElementById('weight').value;
    
    if (height > 0 && weight > 0) {
        var bmi = weight / (height * height);
        var resultText = 'BMI Anda adalah ' + bmi.toFixed(2);
        
        if (bmi < 18.5) {
            resultText += ' (Kekurangan berat badan)';
        } else if (bmi < 24.9) {
            resultText += ' (Normal)';
        } else if (bmi < 29.9) {
            resultText += ' (Kelebihan berat badan)';
        } else {
            resultText += ' (Obesitas)';
        }
        
        document.getElementById('result-section').innerHTML = resultText;
    } else {
        document.getElementById('result-section').innerHTML = 'Masukkan tinggi dan berat badan yang valid.';
    }
}

function resetBMI() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result-section').innerHTML = '';
}