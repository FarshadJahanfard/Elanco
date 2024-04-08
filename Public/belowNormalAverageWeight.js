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
var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogWeeklyWeight(savedUsername);
});

function compareWeights() {
    const weeklyWeightElement = document.getElementById('AverageWeight');
    const yearlyWeightElement = document.getElementById('yearlyAverage');

    const weeklyWeight = parseFloat(weeklyWeightElement.textContent);
    const yearlyWeight = parseFloat(yearlyWeightElement.textContent);

    let comparisonResult = '';
    let WeightRecommendation = '';

    if (weeklyWeight < yearlyWeight) {
        comparisonResult = 'below';
        WeightRecommendation = 'Increase food Intake and reduce activity level';
    } else if (weeklyWeight === yearlyWeight) {
        comparisonResult = 'normal';
        WeightRecommendation = 'Maintain food Intake and activity level';

    } else {
        comparisonResult = 'above';
        WeightRecommendation = 'Reduce food Intake and increase activity level';
    }

    if(comparisonResult === 'below' && weeklyWeight<32) {
        WeightRecommendation = 'Increase food Intake and reduce activity level';
    }
    else if(comparisonResult === 'normal' && weeklyWeight<32) {
        WeightRecommendation = 'Increase food Intake  slightly to reach healthy level ';
    }
    else if(comparisonResult === 'normal' && weeklyWeight>32) {
        WeightRecommendation = 'Reduce food Intake and increase activity level';
    }
    else if(comparisonResult === 'above' && weeklyWeight>32) {
        WeightRecommendation = 'Maintain Current food Intake and activity level';
    }
    document.getElementById('WeightRecommendation').textContent = WeightRecommendation;
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
