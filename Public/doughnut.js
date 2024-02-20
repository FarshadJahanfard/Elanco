// Get the canvas element from the HTML file

function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/temperature/dog/${dogId}`; // Enclose URL in backticks
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}



const temperatureCanvas = document.getElementById('temperatureCanvas');
const ctx3 = temperatureCanvas.getContext('2d');

// Create a new doughnut chart instance
let myChart2 = new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: [], // Initially empty
        datasets: [{
            label: "Temperature (C)",
            data: [], // Initially empty
            backgroundColor: "red", // Set bar color to blue
            borderColor: "#FF6384",
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false, // Adjust if necessary to fit your data
                ticks: {
                    color: "white" // Set Y-axis ticks text color to white
                }
            },
            x: {
                ticks: {
                    color: "white" // Set X-axis ticks text color to white
                }
            }
        },
        legend: {
            display: true, // Set to true to display the legend
            labels: {
                color: "white" // Set legend text color to white
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "white" // Ensure legend text color is white for newer versions of Chart.js
                }
            }
        }
    }
});


function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
        // Generate labels for each data point, making them more descriptive
 
        // Extract heart rates using the "Heart Rate (bpm)" property from the data
        const temperature = data.map(item => item["Temperature (C)"]);


        // Update the chart with the new data

        myChart2.data.datasets[0].data = temperature;

        // Refresh the chart to display the new data
        myChart2.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}


// Example usage: Update chart data for a specific dog by its ID
updateChartData('CANINE001');
// Select the canvas element
