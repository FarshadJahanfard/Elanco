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
            
            var behaviourPattern  = data["Behaviour Pattern"];
            var heartRate = data["Heart Rate (bpm)"];
            var activityLevel = data["Activity Level (steps)"];
            var breathingRate = data["Breathing Rate (breaths/min)"]; // Adjust based on actual data structure
        })
        .catch(error => {
            console.error('Error weight data:', error);
        });
}

fetchDogData2('CANINE001')
    .then(data => {
        console.log(data);
    });