function fetchDogWeeklyWeight(dogId) {
    const url = `http://localhost:3001/api/weeklyWeight/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var weeklyWeightRecordLenght = data.length;
            let totalWeeklyWeightRate = 0;
            for(let i = 0; i < weeklyWeightRecordLenght; i++) {
                totalWeeklyWeightRate += data[i].weight;
                console.log(data[i].weight) ;
            }
            let averageWeight = totalWeeklyWeightRate / weeklyWeightRecordLenght;

totalWeeklyWeightRate = data.reduce((total, item) => total + item["Weight (kg)"], 0);
console.log('Total Breathing Rate:', totalWeeklyWeightRate);
var AverageWeight = totalWeeklyWeightRate/weeklyWeightRecordLenght;
AverageWeight = totalWeeklyWeightRate/data.length;
console.log('AverageWeekly Weight:', totalWeeklyWeightRate/data.length);
AverageWeight = AverageWeight.toFixed(2);
document.getElementById('AverageWeight').textContent = `${AverageWeight} (kg)`;
console.log(data.length)

        
    })
    .catch(error => {
        console.error('Error fetching  Weekly Weight:', error);
        document.getElementById('AverageWeight').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogWeeklyWeight(savedUsername);
});