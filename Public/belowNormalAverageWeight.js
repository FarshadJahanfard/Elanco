function fetchDogWeeklyWeight(dogId) {
    const url = `http://localhost:3001/api/aweeklyWeight/dog/${dogId}`; // Enclose URL in backticks
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
// Assuming the data is in the format you provided
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

function fetchDogYearlyWeight(dogId) {
    const url = `http://localhost:3001/api/yearlyAverageWeight/dog/${dogId}`; // Enclose URL in backticks
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
// Assuming the data is in the format you provided
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
// Call the function with the specific dog ID
fetchDogYearlyWeight(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});
var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
// Call the function with the specific dog ID
fetchDogWeeklyWeight(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});

function compareWeights() {
    const weeklyWeightElement = document.getElementById('AverageWeight');
    const yearlyWeightElement = document.getElementById('yearlyAverage');

    const weeklyWeight = parseFloat(weeklyWeightElement.textContent);
    const yearlyWeight = parseFloat(yearlyWeightElement.textContent);

    let comparisonResult = '';

    if (weeklyWeight < yearlyWeight) {
        comparisonResult = 'below';
    } else if (weeklyWeight === yearlyWeight) {
        comparisonResult = 'normal';
    } else {
        comparisonResult = 'above';
    }

    document.getElementById('comparisonResult').textContent = comparisonResult;
    if (comparisonResult === 'above') {
        document.getElementById('comparisonResult').style.color = 'blue';
    }
    else if (comparisonResult === 'below') {
        document.getElementById('comparisonResult').style.color = 'red';
    }
    else if (comparisonResult === 'normal') {
        document.getElementById('comparisonResult').style.color = 'black';
    } 
    document.getElementById('comparisonResult').textContent = comparisonResult;
}
document.addEventListener('DOMContentLoaded', function() {
    compareWeights();
});
