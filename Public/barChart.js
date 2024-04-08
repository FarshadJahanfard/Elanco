

function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/dailyActivityLevel/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}


const stepsCanvas = document.getElementById('stepsCanvas');
const ctx2 = stepsCanvas.getContext('2d');


let myChart1 = new Chart(ctx2, {
    type: "bar",
    data: {
            datasets: [{
            label: "Steps",
            backgroundColor: "#0067b1", 
            borderColor: "white",
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false, 
                ticks: {
                    color: "black" 
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
                    color: "black" 
                }
                
            }
        },
        legend: {
            display: true, 
            labels: {
                color: "balck" 
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "black" 
                }
            }
        }
    }
});

function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
        
 
        const labels = Array.from({length: 24}, (_, i) => `${i}:00`);
       
        const steps = data.map(item => item["Activity Level (steps)"]);


     
        myChart1.data.labels = labels;
        myChart1.data.datasets[0].data = steps;

        const activityLevels = data.map(item => item["Activity Level (steps)"]);
        const totalActivityLevel = activityLevels.reduce((total, current) => total + current, 0); 
        console.log('Total Activity Level:', totalActivityLevel);

        
        document.getElementById('chartCenterText4').textContent = ` Total Steps:  ${totalActivityLevel}`;

        
        myChart1.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}

var savedUsername = localStorage.getItem('username');
    

updateChartData(savedUsername);


