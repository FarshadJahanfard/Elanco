function fetchDogWeight(dogId) {
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
           ; 
    
           
            document.getElementById('AverageWeight').textContent = `${weight} kg`;

            console.log(weight)
        })
        .catch(error => {
            console.error('Error fetching weight data:', error);
            document.getElementById('AverageWeight').textContent = 'Error';
        });
}

var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
    
    fetchDogWeight(savedUsername);
});