function fetchDogAverageTemp(dogId) {
    const url = `http://localhost:3001/api/averageTemperature/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var TemperatureRecordLenght = data.length;
            let totalTemperature = 0;
            for(let i = 0; i < TemperatureRecordLenght; i++) {
                totalTemperature += data[i].temperature;
                console.log(data[i].temperature) ;
            }
            let averageTemperature = totalTemperature / TemperatureRecordLenght;

totalTemperature = data.reduce((total, item) => total + item["Temperature (C)"], 0);
console.log('Total Temperature:', totalTemperature);
AverageTemperature = totalTemperature/TemperatureRecordLenght;
console.log('Average Temperature:', totalTemperature/TemperatureRecordLenght);
AverageTemperature = AverageTemperature.toFixed(2);
document.getElementById('AverageTemperature').textContent = `${AverageTemperature} C`;
        
    })
    .catch(error => {
        console.error('Error fetching Temperature:', error);
        document.getElementById('AverageTemperature').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogAverageTemp(savedUsername);
});