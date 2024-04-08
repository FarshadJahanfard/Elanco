function fetchDogYearlyWeight(dogId) {
    const url = `http://localhost:3001/api/yearlyAverageWeight/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var yearlyWeightRecordLenght = data.length;
            let totalyearlyWeightRate = 0;
            for(let i = 0; i < yearlyWeightRecordLenght; i++) {
                totalyearlyWeightRate += data[i].weight;
                console.log(data[i].weight) ;
            }
            let averageWeight = totalyearlyWeightRate / yearlyWeightRecordLenght;

totalyearlyWeightRate = data.reduce((total, item) => total + item["Weight (kg)"], 0);
console.log('Total Yearly Weight:', totalyearlyWeightRate);
var AverageYearlyWeight = totalyearlyWeightRate/yearlyWeightRecordLenght;
AverageYearlyWeight = totalyearlyWeightRate/data.length;
console.log('Average Yearly Weight:', totalyearlyWeightRate/data.length);
AverageYearlyWeight = AverageYearlyWeight.toFixed(2);
document.getElementById('yearlyAverage').textContent = `${AverageYearlyWeight} (kg)`;
console.log(data.length)

        
    })
    .catch(error => {
        console.error('Error fetching  Weekly Weight:', error);
        document.getElementById('yearlyAverage').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogYearlyWeight(savedUsername);
});