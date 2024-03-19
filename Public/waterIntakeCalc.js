let globalWater = "Loading.."; 

async function fetchWaterIntake(dogId) {
  const url = `http://localhost:3001/api/waterIntake/dog/${dogId}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const totalWaterIntake = data.reduce((acc, item) => acc + parseFloat(item["Water Intake (ml)"]), 0);

      globalWater = totalWaterIntake

      console.log("Total Water Intake:", totalWaterIntake);

      return totalWaterIntake;
  } catch (error) {
      console.error('Error fetching dog data:', error);
  }
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
  // Call the function with the specific dog ID
  fetchWaterIntake(savedUsername); // Replace 'CANINE001' with the actual dog ID you're interested in
});