function fetchDogYearlyTemperature(dogId) {
    const url = `http://localhost:3001/api/yearlyAverageTemperature/dog/${dogId}`; // Enclose URL in backticks
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var yearlyTemperatureRecordLenght = data.length;
            let totalyearlyTemperatureRate = 0;
            for(let i = 0; i < yearlyTemperatureRecordLenght; i++) {
                totalyearlyTemperatureRate += data[i].temperature;
                console.log(data[i].temperature) ;
            }
            let averageTemperature = totalyearlyTemperatureRate / yearlyTemperatureRecordLenght;
// Assuming the data is in the format you provided
totalyearlyTemperatureRate = data.reduce((total, item) => total + item["Temperature (C)"], 0);
console.log('Total Yearly Temperature:', totalyearlyTemperatureRate);
var AverageYearlyTemperature = totalyearlyTemperatureRate/yearlyTemperatureRecordLenght;
AverageYearlyTemperature = totalyearlyTemperatureRate/data.length;
console.log('Average Yearly Temperature:', totalyearlyTemperatureRate/data.length);
AverageYearlyTemperature = AverageYearlyTemperature.toFixed(2);
document.getElementById('AvgYearTemp').textContent = `${AverageYearlyTemperature} (C)`;
console.log(data.length)

        
    })
    .catch(error => {
        console.error('Error fetching  Weekly Weight:', error);
        document.getElementById('AvgYearTemp').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
// Call the function with the specific dog ID
fetchDogYearlyTemperature(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});