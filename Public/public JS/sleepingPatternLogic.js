function fetchDogData2(dogId) {
    const url = `http://localhost:3001/api/sleepingPattern/dog/${dogId}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming ideal midpoints
            const idealHeartRateMidpoint = 90; // Midpoint of the acceptable range 60-120
            const idealBreathingRateMidpoint = 20; // Midpoint of the acceptable range 10-30
  
            // Calculate deviation from midpoint
            function calculateDeviation(value, midpoint) {
                return Math.abs(value - midpoint) / midpoint;
            }
  
            // Calculating scores
            const heartRateScores = data.map(item => 1 - calculateDeviation(item["Heart Rate (bpm)"], idealHeartRateMidpoint));
            const breathingRateScores = data.map(item => 1 - calculateDeviation(item["Breathing Rate (breaths/min)"], idealBreathingRateMidpoint));
  
            // Averaging the scores
            const averageScores = heartRateScores.map((hr, index) => (hr + breathingRateScores[index]) / 2);
            const overallSleepQualityScore = averageScores.reduce((acc, curr) => acc + curr, 0) / averageScores.length;
  
            // Converting to percentage
            const sleepPerformanceIndex = overallSleepQualityScore * 100;
  
            const roundedIndex = Math.round(sleepPerformanceIndex);
            // Returning the sleep performance index
            return roundedIndex;
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
  
  }