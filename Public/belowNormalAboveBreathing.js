function fetchDogYearlyBreathing(dogId) {
    const url = `http://localhost:3001/api/yearlyBreathingRate/dog/${dogId}`; // Enclose URL in backticks
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
// Assuming the data is in the format you provided
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
// Call the function with the specific dog ID
fetchDogYearlyBreathing(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});
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
// Call the compareBreathingRates function after the fetchDogAverageBreathing and fetchDogYearlyBreathing promises have resolved
Promise.all([fetchDogYearlyBreathing(savedUsername), fetchDogAverageBreathing(savedUsername)])
    .then(() => {
        compareBreathingRates();
    });
function compareBreathingRates() {
    const averageBreathingRateElement = document.getElementById('AverageBreathingRate');
    const yearlyBreathingRateElement = document.getElementById('YearBreathing');

    const averageBreathingRate = parseFloat(averageBreathingRateElement.textContent);
    const yearlyBreathingRate = parseFloat(yearlyBreathingRateElement.textContent);

    let compareBreathing = '';
    let BreathingRecommendation = '';

    if (averageBreathingRate < yearlyBreathingRate) {
        compareBreathing = 'below';
        BreathingRecommendation = 'Check Canine Breathing and contact Vet If Necessary';
    } else if (averageBreathingRate === yearlyBreathingRate) {
        compareBreathing = 'normal';
        BreathingRecommendation = 'Monitor Breathing as normal';
    } else {
        compareBreathing = 'above';
        BreathingRecommendation = 'Check Canine Breathing, reduce activity level and contact Vet If Necessary';
    }
    document.getElementById('BreathingRecommendation').textContent = BreathingRecommendation;
    document.getElementById('compareBreathing').textContent = compareBreathing;
    if (compareBreathing === 'above') {
        document.getElementById('compareBreathing').style.color = 'blue';
    }
    else if (compareBreathing === 'below') {
        document.getElementById('compareBreathing').style.color = 'red';
    }
    else if (compareBreathing === 'normal') {
        document.getElementById('compareBreathing').style.color = 'black';
    } 
    document.getElementById('compareBreathing').textContent = compareBreathing;
}
document.addEventListener('DOMContentLoaded', function() {
    compareBreathingRates();
});
}
);
