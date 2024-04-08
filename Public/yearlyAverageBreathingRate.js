function fetchDogYearlyBreathing(dogId) {
    const url = `http://localhost:3001/api/yearlyBreathingRate/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var yearlyBreathingRecordLenght = data.length;
            let totalyearlyBreathingRate = 0;
            for(let i = 0; i < yearlyBreathingRecordLenght; i++) {
                totalyearlyBreathingRate += data[i].breathingRate;
                console.log(data[i].breathingRate) ;
            }
            let averageBreathing = totalyearlyBreathingRate / yearlyBreathingRecordLenght;

totalyearlyBreathingRate = data.reduce((total, item) => total + item["Breathing Rate (breaths/min)"], 0);
console.log('Total Yearly Breathing Rate:', totalyearlyBreathingRate);
var AverageYearlyBreathing = totalyearlyBreathingRate/yearlyBreathingRecordLenght;
AverageYearlyBreathing = totalyearlyBreathingRate/data.length;
console.log('Average Yearly Breathing Rate:', totalyearlyBreathingRate/data.length);
AverageYearlyBreathing = AverageYearlyBreathing.toFixed(2);
document.getElementById('YearBreathing').textContent = `${AverageYearlyBreathing} (breaths/min)`;
console.log(data.length)

        
    })
    .catch(error => {
        console.error('Error fetching  Weekly Weight:', error);
        document.getElementById('YearBreathing').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogYearlyBreathing(savedUsername);
});