let globalHR = "Loading.."; 

async function fetchHeartRate(dogId) {
  const url = `http://localhost:3001/api/heartRateStatic/dog/${dogId}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const heartRateStatic = data.reduce((acc, item) => acc + parseFloat(item["Heart Rate (bpm)"]), 0);

      globalHR = heartRateStatic

      var heartbeatValueElement = document.querySelector('.heartbeat-value');
      if (heartbeatValueElement) {
        heartbeatValueElement.textContent = globalHR + ' bpm';
      }


      return totalWaterIntake;
  } catch (error) {
      console.error('Error fetching dog data:', error);
  }
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
  // Call the function with the specific dog ID
  fetchHeartRate(savedUsername); // Replace 'CANINE001' with the actual dog ID you're interested in
});