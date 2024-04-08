

function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/heartRate/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}


const heartRateCanvas = document.getElementById('heartRateCanvas');
const ctx = heartRateCanvas.getContext('2d');

let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [{ }], 
        datasets: [{
            label: "Heart Rate",
            data: [], 
            backgroundColor: "red", 
            borderColor: "#FF6384",
            fill: false,
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    color: "white" 
                },
                title: {
                    display: true,
                    text: 'Heart Rate (bpm)',
                    color: "white",
                    align:"center"
                },
                grid: {
                    color: "white",
                }
            },
            x: {
                ticks: {
                    color: "white" 
                },
                title: {
                    display: true,
                    text: 'Time Of Day',
                    color: "white",
                    align: "center",
                    fontSize: "20px",
                },
                grid: {
                    color: "white", 
                }
            }
        }, 
        legend: {
            display: true, 
            labels: {
                color: "white" 
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "white" 
                }
            }
        }
    }
});


function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
      
 
        const labels = Array.from({length: 24}, (_, i) => `${i}:00`);
        
        const heartRates = data.map(item => item["Heart Rate (bpm)"]);


        
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = heartRates;

        
        myChart.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}


var savedUsername = localStorage.getItem('username');

updateChartData(savedUsername);



