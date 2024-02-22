function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/temperature/dog/${dogId}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Since your data is an array of objects, access the first item and then its 'Temperature (C)' property
            const temperature = data[0]["Temperature (C)"]; // Adjust based on actual data structure
    
            // Update the text in the middle of the chart
            document.getElementById('chartCenterText').textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('11111 tching temperature data:', error);
            document.getElementById('chartCenterText').textContent = 'Error';
        });
}
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

document.addEventListener('DOMContentLoaded', function() {
    // Call the function with the specific dog ID
    fetchDogData('CANINE001'); 
    fetchDogData1('CANINE001');// Replace 'CANINE001' with the actual dog ID you're interested in
});