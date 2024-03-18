
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
    type: "line",
    data: {
            datasets: [{
            label: "Steps",
            backgroundColor: "#0067b1", // Set bar color to green
            borderColor: "white",
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false, // Adjust if necessary to fit your data
                ticks: {
                    color: "black" // Set Y-axis ticks text color to white
                },
                title: {
                    display: true,
                    text: 'Steps',
                    font: {
                        size: 16},
                    color: "black",
                    align: "center"
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time Of Day',
                    font: {
                        size: 16},
                    color: "black",
                    align: "center"
                },
                ticks: {
                    color: "black" // Set X-axis ticks text color to white
                }
                
            }
        },
        legend: {
            display: true, // Set to true to display the legend
            labels: {
                color: "balck" // Set legend text color to white
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "black" // Ensure legend text color is white for newer versions of Chart.js
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

        const activityLevels = data.map(item => item["Activity Level (steps)"]);
        const totalActivityLevel = activityLevels.reduce((total, current) => total + current, 0); 
        console.log('Total Activity Level:', totalActivityLevel);

        // Update the text in the middle of the chart
        document.getElementById('chartCenterText4').textContent = ` Total Steps:  ${totalActivityLevel}`;

        // Refresh the chart to display the new data
        myChart1.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}

var savedUsername = localStorage.getItem('username');
    
// Use the username as needed
// Example usage: Update chart data for a specific dog by its ID
updateChartData(savedUsername);


