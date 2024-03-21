function fetchDogYearlyFood(dogId) {
    const url = `http://localhost:3001/api/yearlyFoodIntake/dog/${dogId}`; // Enclose URL in backticks
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
// Assuming the data is in the format you provided
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
// Call the function with the specific dog ID
fetchDogYearlyFood(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});
function fetchDogAverageFoodIntake(dogId) {
    const url = `http://localhost:3001/api/averagefoodIntake/dog/${dogId}`; // Enclose URL in backticks
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
// Assuming the data is in the format you provided
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
// Call the function with the specific dog ID
fetchDogAverageFoodIntake(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
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

    if (averageFoodIntake < yearlyFoodIntake) {
        compareFoodIntake = 'below';
    } else if (averageFoodIntake === yearlyFoodIntake) {
        compareFoodIntake = 'normal';
    } else {
        compareFoodIntake = 'above';
    }

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
