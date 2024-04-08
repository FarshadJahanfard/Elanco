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

fetchDogYearlyFood(savedUsername);
});