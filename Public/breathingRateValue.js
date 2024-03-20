let globalBR = "Loading.."; 

async function fetchBreathingRate(dogId) {
  const url = `http://localhost:3001/api/breathingRate/dog/${dogId}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const breathingRate = data.reduce((acc, item) => acc + parseFloat(item["Breathing Rate (breaths/min)"]), 0);

      globalBR = breathingRate;

      console.log("Breathing Rate:", breathingRate);


      return breathingRate;
  } catch (error) {
      console.error('Error fetching dog data:', error);
  }
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
  fetchBreathingRate(savedUsername);
});