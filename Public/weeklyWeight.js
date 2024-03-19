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
           
            const weight = data.map(item => item["Weight (kg)"]); // Adjust based on actual data structure// Convert to float and round to 1 decimal place
                
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