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
            
            const weight = data[0]["Weight (kg)"]; 
            const roundedWeight = parseFloat(weight).toFixed(1); 
    
            
            document.getElementById('chartCenterText1').textContent = `${roundedWeight} kg`;
        })
        .catch(error => {
            console.error('Error fetching weight data:', error);
            document.getElementById('chartCenterText1').textContent = 'Error';
        });
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
   
    fetchDogData(savedUsername); 
    fetchDogData1(savedUsername);
});