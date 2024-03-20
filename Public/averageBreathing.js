function fetchDogAverageBreathing(dogId) {
    const url = `http://localhost:3001/api/averageBreathingRate/dog/${dogId}`; // Enclose URL in backticks
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var BreathingRateRecordLenght = data.length;
            let totalBreathingRate = 0;
            for(let i = 0; i < BreathingRateRecordLenght; i++) {
                totalBreathingRate += data[i].breathingRate;
                console.log(data[i].breathingRate) ;
            }
            let averageBreathingRate = totalBreathingRate / BreathingRateRecordLenght;
// Assuming the data is in the format you provided
totalBreathingRate = data.reduce((total, item) => total + item["Breathing Rate (breaths/min)"], 0);
console.log('Total Breathing Rate:', totalBreathingRate);
var AverageBreathingRate = totalBreathingRate/BreathingRateRecordLenght;
AverageBreathingRate = totalBreathingRate/data.length;
console.log('Average BreathingRate:', totalBreathingRate/data.length);
AverageBreathingRate = AverageBreathingRate.toFixed(2);
document.getElementById('AverageBreathingRate').textContent = `${AverageBreathingRate} (breaths/min)`;
console.log(data.length)
        
    })
    .catch(error => {
        console.error('Error fetching  Breathing Rate:', error);
        document.getElementById('AverageBreathingRate').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
// Call the function with the specific dog ID
fetchDogAverageBreathing(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});