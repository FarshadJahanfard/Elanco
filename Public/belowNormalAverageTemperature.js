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

function fetchDogYearlyTemperature(dogId) {
    const url = `http://localhost:3001/api/yearlyAverageTemperature/dog/${dogId}`; 
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

fetchDogYearlyTemperature(savedUsername);
});


document.addEventListener('DOMContentLoaded', function() {
    Promise.all([fetchDogAverageTemp(savedUsername), fetchDogYearlyTemperature(savedUsername)])
        .then(() => {
            compareTemperature();
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function compareTemperature() {
   
    const weeklyTemperatureElement = document.getElementById('AverageTemperature');
    const yearlyTemperatureElement = document.getElementById('AvgYearTemp');

    const weeklyTemperature = parseFloat(weeklyTemperatureElement.textContent);
    console.log(weeklyTemperatureElement.textContent);
   
    const yearlyTemperature = parseFloat(yearlyTemperatureElement.textContent);
    console.log(yearlyTemperatureElement.textContent);
    console.log(weeklyTemperature);
    console.log(yearlyTemperature);

    let TempResult = '';
    let TempRecommendation = '';

    if (weeklyTemperature < yearlyTemperature) {
        TempResult = 'below';
        TempRecommendation = 'Keep Canine warm and monitor temperature and see a vet if necessary';
    } else if (weeklyTemperature === yearlyTemperature) {
        TempResult = 'normal';
        TempRecommendation = 'Keep Canine under same conditions'
    } else {
        TempResult = 'above';
        TempRecommendation = 'Keep Canine cool and monitor temperature and see a vet if necessary';
    }
    document.getElementById('TempRecommendation').textContent = TempRecommendation;
    document.getElementById('TempResult').textContent = TempResult;
    if (TempResult === 'above') {
        document.getElementById('TempResult').style.color = 'blue';
    }
    else if (TempResult === 'below') {
        document.getElementById('TempResult').style.color = 'red';
    }
    else if (TempResult === 'normal') {
        document.getElementById('TempResult').style.color = 'black';
    } 
    
}
document.addEventListener('DOMContentLoaded', function(savedUsername) {
    compareTemperature();
    
});
