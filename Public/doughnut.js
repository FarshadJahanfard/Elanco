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
        labels: [], // Labels for each doughnut segment
        datasets: [{
            data: [], // Data values for each segment
          backgroundColor: 'rgba(88, 100, 241, 0.5)',
            borderColor: "#ffffff",
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        cutout: '75%', // Adjust this value to make the doughnut thinner or thicker, if needed
        plugins: {
            title: {
                display: true,
                text: 'Current Temperature',
                color: "white",
                
            },
            legend: {
                display: false, // Disable the legend
            }
        }
    }
});

let globalTemp = "Loading.."; // Default temperature value, update as needed


function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
        // Generate labels for each data point, making them more descriptive
 
        // Assuming you want to set globalTemp to the last temperature in the fetched data
        if(data.length > 0) {
            const latestTemperature = data[data.length - 1]["Temperature (C)"]; // Assuming the last item is the latest
            globalTemp = latestTemperature; // Update the global temperature variable
        }

        const labels = data.map((_, index) => `${index + 1}`);
        // Extract heart rates using the "Heart Rate (bpm)" property from the data
        const temperature = data.map(item => item["Temperature (C)"]);

        var temperatureValueElement = document.querySelector('.temperature-value');
        if (temperatureValueElement) {
          temperatureValueElement.textContent = globalTemp + '°C';
        }


        // Update the chart with the new data
        myChart2.data.labels = labels;
        myChart2.data.datasets[0].data = temperature;

        // Update the center text with the global temperature variable
        document.getElementById('chartCenterText').textContent = `${globalTemp}°C`;

        // Refresh the chart to display the new data
        myChart2.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}

var savedUsername = localStorage.getItem('username');

// Example usage: Update chart data for a specific dog by its ID
updateChartData(savedUsername);
// Select the canvas element
