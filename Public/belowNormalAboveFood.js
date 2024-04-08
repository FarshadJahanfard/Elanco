function fetchDogYearlyFood(dogId) {
    const url = `http://localhost:3001/api/yearlyFoodIntake/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var yearlyFoodIntakeRecordLenght = data.length;
            let totalyearlyFoodIntake = 0;
            for(let i = 0; i < yearlyFoodIntakeRecordLenght; i++) {
                totalyearlyFoodIntake += data[i].foodIntake;
                console.log(data[i].foodIntake) ;
            }
            let averageFoodIntake = totalyearlyFoodIntake / yearlyFoodIntakeRecordLenght;

totalyearlyFoodIntake = data.reduce((total, item) => total + item["Food Intake (calories)"], 0);
console.log('Total Yearly Food Intake:', totalyearlyFoodIntake);
var AverageyearlyFoodIntak = totalyearlyFoodIntake/yearlyFoodIntakeRecordLenght;
AverageyearlyFoodIntak = totalyearlyFoodIntake/data.length;
console.log('Average Yearly Food Intake:', totalyearlyFoodIntake/data.length);
AverageyearlyFoodIntak = AverageyearlyFoodIntak.toFixed(2);
document.getElementById('YearFood').textContent = `${AverageyearlyFoodIntak}  (calories)`;
console.log(data.length)

        
    })
    .catch(error => {
        console.error('Error fetching  Weekly Weight:', error);
        document.getElementById('YearFood').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogYearlyFood(savedUsername);
});
function fetchDogAverageFoodIntake(dogId) {
    const url = `http://localhost:3001/api/averagefoodIntake/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
            var FoodIntakeRecordLenght = data.length;
            let totalFoodIntake = 0;
            for(let i = 0; i < FoodIntakeRecordLenght; i++) {
                totalFoodIntake += data[i].foodIntake;
                console.log(data[i].foodIntake) ;
            }
            let averageFoodIntake = totalFoodIntake / FoodIntakeRecordLenght;

totalFoodIntake = data.reduce((total, item) => total + item["Food Intake (calories)"], 0);
console.log('Total Breathing Rate:', totalFoodIntake);
var AverageFoodIntake = totalFoodIntake/FoodIntakeRecordLenght;
AverageFoodIntake = totalFoodIntake/data.length;
console.log('Average Food Intake:', totalFoodIntake/data.length);
AverageFoodIntake = AverageFoodIntake.toFixed(2);
document.getElementById('foodIntake').textContent = `${AverageFoodIntake} (calories)`;
console.log(data.length)
        
    })
    .catch(error => {
        console.error('Error fetching Food Intake:', error);
        document.getElementById('foodIntake').textContent = 'Error';
    });
}


var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {

fetchDogAverageFoodIntake(savedUsername);
Promise.all([fetchDogYearlyFood(savedUsername), fetchDogAverageFoodIntake(savedUsername)])
    .then(() => {
        compareFoodIntakes();
    });

function compareFoodIntakes() {
    const averageFoodIntakeElement = document.getElementById('foodIntake');
    const yearlyFoodIntakeElement = document.getElementById('YearFood');

    const averageFoodIntake = parseFloat(averageFoodIntakeElement.textContent);
    const yearlyFoodIntake = parseFloat(yearlyFoodIntakeElement.textContent);

    let compareFoodIntake = '';
    let FoodRecommendation = '';

    if (averageFoodIntake < yearlyFoodIntake) {
        compareFoodIntake = 'below';
        FoodRecommendation = 'Increase food intake slightly or majorily if Canine is underweight';
    } else if (averageFoodIntake === yearlyFoodIntake) {
        compareFoodIntake = 'normal';
        FoodRecommendation = 'Maintain food intake or increase/decrease depending on dog weight';
    } else {
        compareFoodIntake = 'above';
        FoodRecommendation = 'Reduce food intake and increase activity level if Canine is overweight';
    }
    document.getElementById('FoodRecommendation').textContent = FoodRecommendation;
    document.getElementById('compareFood').textContent = compareFoodIntake;
    if (compareFoodIntake === 'above') {
        document.getElementById('compareFood').style.color = 'blue';
    }
    else if (compareFoodIntake === 'below') {
        document.getElementById('compareFood').style.color = 'red';
    }
    else if (compareFoodIntake === 'normal') {
        document.getElementById('compareFood').style.color = 'black';
    } 
    document.getElementById('compareFood').textContent = compareFoodIntake;
}

document.addEventListener('DOMContentLoaded', function() {
    compareFoodIntakes();
});

})
