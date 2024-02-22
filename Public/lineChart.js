
// Function to fetch dog heart rate data from the server
function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/heartRate/dog/${dogId}`; // Enclose URL in backticks
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

// Select the canvas element and get its context for drawing
const heartRateCanvas = document.getElementById('heartRateCanvas');
const ctx = heartRateCanvas.getContext('2d');

// Create a new Chart instance
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [{ }], // Initially empty
        datasets: [{
            label: "Heart Rate",
            data: [], // Initially empty
            backgroundColor: "red", 
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
                },
                title: {
                    display: true,
                    text: 'Heart Rate (bpm)',
                    color: "white",
                    align:"center"
                }
            },
            x: {
                ticks: {
                    color: "white" // Set X-axis ticks text color to white
                },
                title: {
                    display: true,
                    text: 'Time Of Day',
                    color: "white",
                    align: "center"
                }
            }
        }, // Add a closing parenthesis here
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

// Function to update the chart data
// Function to update the chart data
function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
        // Generate labels for each data point, making them more descriptive
 
        const labels = data.map((_, index) => `${index + 1}`);
        // Extract heart rates using the "Heart Rate (bpm)" property from the data
        const heartRates = data.map(item => item["Heart Rate (bpm)"]);


        // Update the chart with the new data
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = heartRates;

        // Refresh the chart to display the new data
        myChart.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}


// Example usage: Update chart data for a specific dog by its ID
updateChartData('CANINE001');
// Select the canvas element




