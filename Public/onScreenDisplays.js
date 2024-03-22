function fetchDogData1(dogId) {
    const url = `http://localhost:3001/api/weight/dog/${dogId}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Since your data is an array of objects, access the first item and then its 'Weight (kg)' property
            const weight = data[0]["Weight (kg)"]; // Adjust based on actual data structure
            const roundedWeight = parseFloat(weight).toFixed(1); // Convert to float and round to 1 decimal place
    
            // Update the text in the middle of the chart
            document.getElementById('chartCenterText1').textContent = `${roundedWeight} kg`;
        })
        .catch(error => {
            console.error('Error fetching weight data:', error);
            document.getElementById('chartCenterText1').textContent = 'Error';
        });
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
    // Call the function with the specific dog ID
    fetchDogData(savedUsername); 
    fetchDogData1(savedUsername);// Replace 'CANINE001' with the actual dog ID you're interested in
});