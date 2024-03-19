function fetchWeeklyWeight(dogId) {
    const url = `http://localhost:3001/api/weeklyWeight/dog/${dogId}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Since your data is an array of objects, access the first item and then its 'Weight (kg)' property
        // Calculate the weekly average weight
            const dayWeights ={};
            data.forEach(item => {
                const date = item.Date;
                const weight = item["Weight (kg)"];
                if (!dayWeights[date]) {
                    dayWeights[date] = [totalweight = 0, count = 0];
                    dayWeights[date] = [weight];
                }
                dayWeights[date].totalWeight += weight;
                dayWeights[date].count++;
            });
            
            const weight = data.map(item => item["Weight (kg)"]); // Adjust based on actual data structure// Convert to float and round to 1 decimal place
           const averageWeight = data.map(item => item["Weight (kg)"])
          
      
            console.log(weight);
            // Update the text in the middle of the chart
            document.getElementById('weeklyWeight').textContent = `${weight} kg`;
        })
        .catch(error => {
            console.error('Error fetching weight data:', error);
            document.getElementById('weeklyWeight').textContent = 'Error';
        });
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
    // Call the function with the specific dog ID
    fetchWeeklyWeight(savedUsername); // Replace 'CANINE001' with the actual dog ID you're interested in
});