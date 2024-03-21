let globalAL = "Loading.."; 

async function fetchActivityLevel(dogId) {
  const url = `http://localhost:3001/api/dailyActivityLevel/dog/${dogId}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const dailyActivityLevel = data.reduce((acc, item) => acc + parseFloat(item["Activity Level (steps)"]), 0);

      console.log(dailyActivityLevel)

      globalAL = dailyActivityLevel;

      var dailyActivityValue1 = document.querySelector('.activitylevel-value');
        if (dailyActivityValue1) {
            dailyActivityValue1.textContent = globalAL + ' Steps';
        }

      return dailyActivityLevel;
  } catch (error) {
      console.error('Error fetching dog data:', error);
  }
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
  // Call the function with the specific dog ID
  fetchActivityLevel(savedUsername); // Replace 'CANINE001' with the actual dog ID you're interested in
});

