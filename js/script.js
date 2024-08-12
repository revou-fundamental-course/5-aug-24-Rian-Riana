// script.js
function calculateBMI(event) {


    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;

    console.log('Height:', height, 'Weight:', weight);
    
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
        
        console.log('Result:', resultText);

        document.getElementById('result-section').innerHTML = resultText;
    } else {
        document.getElementById('result-section').innerHTML = 'Masukkan tinggi dan berat badan yang valid.';
    }
}

function resetBMI(event) {
    event.preventDefault(); // Mencegah halaman di-refresh

    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result-section').innerHTML = '';
}
