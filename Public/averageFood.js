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
});