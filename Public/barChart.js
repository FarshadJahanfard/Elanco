
// Function to fetch dog heart rate data from the server
function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/activitylevel/dog/${dogId}`; // Enclose URL in backticks
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

// Select the canvas element and get its context for drawing
const stepsCanvas = document.getElementById('stepsCanvas');
const ctx2 = stepsCanvas.getContext('2d');

// Create a new Chart instance
let myChart1 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: [], // Initially empty
        datasets: [{
            label: "Steps",
            data: [], // Initially empty
            backgroundColor: "blue", // Set bar color to red
            borderColor: "blue",
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
                title: {
                    display: true,
                    text: 'Time',
                    color: "white"
                },
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
 
        const labels = data.map((_, index) => `${index + 1}`);
        // Extract heart rates using the "Heart Rate (bpm)" property from the data
        const steps = data.map(item => item["Activity Level (steps)"]);


        // Update the chart with the new data
        myChart1.data.labels = labels;
        myChart1.data.datasets[0].data = steps;

        // Refresh the chart to display the new data
        myChart1.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}


// Example usage: Update chart data for a specific dog by its ID
updateChartData('CANINE001');
// Select the canvas element




