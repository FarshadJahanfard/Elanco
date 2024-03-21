let globalCB = "Loading.."; 

async function fetchCaloriesBurnt(dogId) {
  const url = `http://localhost:3001/api/caloriesBurnt/dog/${dogId}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const caloriesBurnt = data.reduce((acc, item) => acc + parseFloat(item["Calorie Burn"]), 0);

      globalCB = (caloriesBurnt.toFixed(1))

      var caloriesBurntValueElement = document.querySelector('.caloriesburnt-value');
      if (caloriesBurntValueElement) {
        caloriesBurntValueElement.textContent = globalCB + 'Calories Burnt';
      }



      return globalCB;
  } catch (error) {
      console.error('Error fetching dog data:', error);
  }
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
  // Call the function with the specific dog ID
  fetchCaloriesBurnt(savedUsername); // Replace 'CANINE001' with the actual dog ID you're interested in
});